import { Text, View } from 'react-native';
import { Redirect } from 'expo-router';
import { useSession } from '../../ctx';

export default function Index() {
  // const { signOut } = useSession();
  return (
    <Redirect href="(tabs)/(home)"/>
  );
}
