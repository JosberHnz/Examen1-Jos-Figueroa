import { useAuth } from "../context/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user } = useAuth();

  if (user === undefined) {
    return null; // Previene renderizado prematuro mientras se carga el usuario
  }

  return user ? <Redirect href="/(tabs)/home" /> : <Stack />;
}





