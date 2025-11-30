import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 👈 turn off the black top bar everywhere
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

