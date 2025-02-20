import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from './contexts/AuthContext';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const { login, user } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (email.trim().endsWith("@gmail.com")) {
      await login(email);
      router.push("/(protected)/home"); // Redirige al home si el login es exitoso
    } else {
      alert("Debes ingresar un correo de dominio @gmail.com");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Iniciar sesión</Text>

      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {user && <Text style={styles.welcomeMessage}>Bienvenido {user.email}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeMessage: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#4CAF50',
  },
});






