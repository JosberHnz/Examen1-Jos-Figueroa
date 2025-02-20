import React from "react";
import { View, Text, FlatList } from "react-native";
import { useTasks } from "../context/TaskContext";

export default function HomeScreen() {
  const { tasks } = useTasks();

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Lista de Tareas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}


