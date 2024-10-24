import { useEffect } from 'react';
import { Text } from 'react-native';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, router } from 'expo-router';

import { useSession } from '../../ctx';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  useEffect(() => {
    if (!isLoading && !session) {
      // Perform redirection only when the session is null and loading is finished
      router.replace('/sign-in');
    }
  }, [isLoading, session]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    
      // <Stack/>
      <Stack>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="(tabs)"  options={{ headerShown: false }}  />
    </Stack>
       
   
  );
}
