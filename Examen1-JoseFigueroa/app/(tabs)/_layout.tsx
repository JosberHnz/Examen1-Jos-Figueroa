import { Tabs } from 'expo-router/tabs';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="add-task" options={{ title: 'Añadir Tarea' }} />
    </Tabs>
  );
}
