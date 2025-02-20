// app/(protected)/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';

const ProtectedLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" />
      <Stack.Screen name="add-task" />
    </Stack>
  );
};

export default ProtectedLayout;






