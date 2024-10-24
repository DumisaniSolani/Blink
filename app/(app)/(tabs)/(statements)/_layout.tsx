import { Stack } from 'expo-router';

export default function StatementLayout() {
  return (
    <Stack>
      <Stack.Screen name="transactionHistory"  options={{ headerShown: false }} />
      <Stack.Screen name="download" options={{ headerShown: false }}  />
      <Stack.Screen name="refunds"  options={{ headerShown: false }} />
    </Stack>
  );
}
