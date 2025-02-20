import { Stack } from "expo-router";
import { AuthProvider } from "./contexts/AuthContext";
import { TasksProvider } from "./contexts/TaskContext";

export default function Layout() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Stack />
      </TasksProvider>
    </AuthProvider>
  );
}
