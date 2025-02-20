import { useAuth } from "../contexts/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user } = useAuth();

  if (user === undefined) {
    return null;
  }

  return user ? <Redirect href="/(tabs)/home" /> : <Stack />;
}





