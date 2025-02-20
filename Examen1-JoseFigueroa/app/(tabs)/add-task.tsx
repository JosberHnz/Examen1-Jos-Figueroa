import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
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
    router.push("/(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título de la tarea:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la tarea"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Ingrese la descripción"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Button title="Guardar tarea" onPress={saveTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
});





