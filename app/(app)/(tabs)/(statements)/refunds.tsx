import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RefundsScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-40"></View>
      <View className="items-center mb-10">
        <Text className="text-2xl font-bold text-gray-800">Refunds</Text>
        <Text className="text-lg text-gray-500">Manage your refund requests here.</Text>
      </View>

      <View className="space-y-5">
        {/* View Refund Requests Button */}
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg items-center flex-row justify-between shadow-md"
        >
          <Ionicons name="search" color="white" size={25} />
          <Text className="text-white text-lg">View Refund Requests</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </TouchableOpacity>

        {/* New Refund Request Button */}
        <TouchableOpacity
          className="bg-green-500 p-4 rounded-lg items-center flex-row justify-between shadow-md"
        >
          <Ionicons name="reload" color="white" size={25} />
          <Text className="text-white text-lg">Initiate New Refund</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
