import { Stack } from 'expo-router';

export default function TransactionsLayout() {
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
      <Stack.Screen name="send" options={{ headerShown: false }}  />
      <Stack.Screen name="request"  options={{ headerShown: false }} />
      <Stack.Screen name="confirm"  options={{ headerShown: false }} />
      <Stack.Screen name="status" options={{ headerShown: false }}  />
      <Stack.Screen name="blink_request" options={{ headerShown: false }}  />
    </Stack>
  );
}
