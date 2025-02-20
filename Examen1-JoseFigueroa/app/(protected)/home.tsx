import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button, Alert, BackHandler, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  const [tasks, setTasks] = useState<{ title: string; description: string }[]>([]);
  const router = useRouter();

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

  const exitApp = () => {
    Alert.alert("Salir", "¿Deseas cerrar sesión?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Salir", onPress: () => router.push("/login") }, // Redirige al login
    ]);
  };

  const handleAddTask = () => {
    router.push("/(protected)/add-task"); // Navegar a la pantalla de agregar tarea
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Salir", "¿Deseas cerrar sesión?", [
        { text: "Cancelar", style: "cancel" },
        { text: "Salir", onPress: () => router.push("/login") }, // Redirige al login
      ]);
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>

      {/* Imagen local */}
      <Image
        source={require('../../assets/images/react-logo.png')}
        style={styles.image}
      />

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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={handleAddTask}>
          <MaterialIcons name="add-circle" size={24} color="blue" />
          <Text style={styles.buttonText}>Agregar Tarea</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={exitApp}>
          <MaterialIcons name="exit-to-app" size={24} color="white" />
          <Text style={[styles.buttonText, { color: 'white' }]}>Salir de la aplicación</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 20,
  },
  taskCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 14,
    color: "gray",
  },
  buttonContainer: {
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  },
});













