import React, { createContext, useContext, useState, ReactNode } from "react";

interface Task {
  id: number;
  title: string;
}

interface TasksContextType {
  tasks: Task[];
  addTask: (title: string) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Tarea predeterminada 1" },
    { id: 2, title: "Tarea predeterminada 2" },
  ]);

  const addTask = (title: string) => {
    const newTask = { id: tasks.length + 1, title };
    setTasks([...tasks, newTask]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks debe usarse dentro de un TasksProvider");
  }
  return context;
}

