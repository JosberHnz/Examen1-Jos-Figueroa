import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function AddTask() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveTask = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Por favor, ingresa un título y una descripción.");
      return;
    }

    const newTask = { title, description };
    const storedTasks = await AsyncStorage.getItem("tasks");
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    
    tasks.push(newTask);
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));

    setTitle("");
    setDescription("");
    router.push("/(protected)/home");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Agregar Nueva Tarea</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Título de la tarea:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el título de la tarea"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Descripción:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Ingrese la descripción"
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>

      <Button title="Guardar tarea" onPress={saveTask} color="#4CAF50" />

    </ScrollView>
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
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
});






