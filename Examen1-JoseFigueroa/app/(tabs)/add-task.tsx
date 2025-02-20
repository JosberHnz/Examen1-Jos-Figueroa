import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useTasks } from "../context/TaskContext";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../context/types"; // Importa los tipos

export default function AddTaskScreen() {
  const [taskTitle, setTaskTitle] = useState("");
  const { addTask } = useTasks();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "AddTask">>();

  const handleAddTask = () => {
    if (taskTitle.trim() === "") return;
    addTask(taskTitle);
    setTaskTitle("");
    navigation.navigate("Home"); // Ahora TypeScript reconocerá esta ruta correctamente
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Añadir Tarea</Text>
      <TextInput
        placeholder="Escribe la tarea"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Agregar" onPress={handleAddTask} />
    </View>
  );
}



