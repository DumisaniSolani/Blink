import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LimitsScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-40"></View>
      {/* Header Section */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-gray-800">Limits</Text>
        <Text className="text-lg text-gray-500">Set your transaction limits</Text>
      </View>

      {/* Send Limit */}
      <View className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="arrow-up" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Send Limit</Text>
        </View>
        <Text className="text-lg font-medium text-gray-700">R50,000.00</Text>
      </View>

      {/* Receive Limit */}
      <View className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="arrow-down" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Receive Limit</Text>
        </View>
        <Text className="text-lg font-medium text-gray-700">R100,000.00</Text>
      </View>

      {/* Withdrawal Limit */}
      <View className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="cash" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Withdrawal Limit</Text>
        </View>
        <Text className="text-lg font-medium text-gray-700">R10,000.00</Text>
      </View>

      {/* Change Limit Button */}
      <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center mt-6">
        <Text className="text-white text-lg font-medium">Change Limits</Text>
      </TouchableOpacity>
    </View>
  );
}
