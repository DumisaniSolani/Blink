import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="notifications" options={{ headerShown: false }} />
      <Stack.Screen name="transactions" options={{ headerShown: false }} />
      {/* Transactions Stack */}
      {/* <Stack.Screen name="home/transactions/send" options={{ headerShown: false }} />
      <Stack.Screen name="home/transactions/request" options={{ headerShown: false }} />
      <Stack.Screen name="home/transactions/confirm" options={{ headerShown: false }} />
      <Stack.Screen name="home/transactions/status" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
