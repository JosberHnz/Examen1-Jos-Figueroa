import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Estructura del contexto
interface AuthContextType {
  user: { email: string } | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const savedUser = await AsyncStorage.getItem("user");

      if (savedUser && savedUser.trim().endsWith("@gmail.com")) {
        setUser({ email: savedUser.trim() });
      } else {
        setUser(null);
      }
    };
    loadUser();
  }, []);


  const login = async (email: string) => {
    const trimmedEmail = email.trim();

    if (trimmedEmail.endsWith("@gmail.com")) {
      setUser({ email: trimmedEmail });
      await AsyncStorage.setItem("user", trimmedEmail);
    } else {
      alert("Debes ingresar un correo de dominio @gmail.com");
      setUser(null);
    }
  };

  // Función para cerrar sesión
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar el contexto de autenticación
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
}







  


