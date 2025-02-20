import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import * as Updates from "expo-updates";
import { useFocusEffect } from "@react-navigation/native";

export default function Home() {
  const [tasks, setTasks] = useState<{ title: string; description: string }[]>([]);
  const router = useRouter();

  // Cargar tareas cuando la pantalla esté en foco
  useFocusEffect(
    React.useCallback(() => {
      const loadTasks = async () => {
        const storedTasks = await AsyncStorage.getItem("tasks");
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      };
      loadTasks();
    }, [])
  );

  // Función para salir de la aplicación
  const exitApp = () => {
    Alert.alert("Salir", "¿Deseas cerrar la aplicación?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Salir", onPress: () => Updates.reloadAsync() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>

      {tasks.length === 0 ? (
        <Text style={styles.emptyText}>No hay tareas guardadas.</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskCard}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskDescription}>{item.description}</Text>
            </View>
          )}
        />
      )}

      <Button title="Salir de la aplicación" onPress={exitApp} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 20,
  },
  taskCard: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskDescription: {
    fontSize: 14,
    color: "gray",
  },
});



