import { Stack } from 'expo-router';

export default function WalletLayout() {
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
      <Stack.Screen name="wallet"  options={{ headerShown: false }} />
      <Stack.Screen name="manage"  options={{ headerShown: false }}  />
      <Stack.Screen name="add"  options={{ headerShown: false }} />
    </Stack>
  );
}
