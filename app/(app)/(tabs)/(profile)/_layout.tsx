import { Stack } from 'expo-router';

export default function ProfileLayout() {
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
      <Stack.Screen name="profile"  options={{ headerShown: false }} />
      <Stack.Screen name="settings"  options={{ headerShown: false }} />
      <Stack.Screen name="bankAccounts" options={{ headerShown: false }}  />
      <Stack.Screen name="limits" options={{ headerShown: false }}  />
      <Stack.Screen name="upgrade"  options={{ headerShown: false }} />
    </Stack>
  );
}
