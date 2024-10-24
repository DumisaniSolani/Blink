import { Stack } from 'expo-router';

export default function SuppportLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="helpCenter" options={{ headerShown: false }}  />
      <Stack.Screen name="contact"  options={{ headerShown: false }} />
      <Stack.Screen name="report" options={{ headerShown: false }}  />
    </Stack>
  );
}
