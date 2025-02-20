import { Stack } from "expo-router";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TaskContext";

export default function Layout() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Stack />
      </TasksProvider>
    </AuthProvider>
  );
}
