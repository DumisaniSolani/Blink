import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-40"></View>
      {/* Profile Picture and Name */}
      <View className="items-center mb-8">
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with user profile image
          className="w-24 h-24 rounded-full border-2 border-green-500 mb-4"
        />
        <Text className="text-2xl font-bold text-gray-800">Dumisani Solani</Text>
        <Text className="text-lg text-gray-500">dumisani@solanyxtech.com</Text>
      </View>

      {/* Navigation Cards */}
      <View className="space-y-5">
        <Link href="/bankAccounts" className="bg-gray-100 p-5 rounded-lg shadow-md flex-row items-center">
          <Ionicons name="wallet" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Bank Accounts</Text>
        </Link>

        <Link href="/limits" className="bg-gray-100 p-5 rounded-lg shadow-md flex-row items-center">
          <Ionicons name="stats-chart" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Limits</Text>
        </Link>

        <Link href="/settings" className="bg-gray-100 p-5 rounded-lg shadow-md flex-row items-center">
          <Ionicons name="settings" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Settings</Text>
        </Link>

        <Link href="/upgrade" className="bg-gray-100 p-5 rounded-lg shadow-md flex-row items-center">
          <Ionicons name="arrow-up-circle" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Upgrade</Text>
        </Link>
      </View>
    </View>
  );
}
