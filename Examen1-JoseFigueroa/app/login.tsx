import { useAuth } from "./context/AuthContext";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email.includes("@")) {
      Alert.alert("Error", "Por favor, introduce un correo válido.");
      return;
    }
    
    login(email); // Guardar sesión en Context API
    Alert.alert("Inicio de sesión exitoso", `Bienvenido, ${email}`);
    router.replace("/(tabs)/home"); // Redirigir al home
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={{
          width: "100%",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}





