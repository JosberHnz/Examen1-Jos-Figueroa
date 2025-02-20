import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const { login, user } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (email.trim().endsWith("@gmail.com")) {
      await login(email);
      router.push("/(tabs)/home"); // Redirige al home si el login es exitoso
    } else {
      alert("Debes ingresar un correo de dominio @gmail.com");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
      {user && <Text>Bienvenido {user.email}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});



