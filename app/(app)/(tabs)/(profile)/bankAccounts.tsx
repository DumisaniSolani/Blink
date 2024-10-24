import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BankAccountsScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-40"></View>
      {/* Header Section */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-gray-800">Bank Accounts</Text>
        <Text className="text-lg text-gray-500">Manage your linked bank accounts</Text>
      </View>

      {/* Linked Bank Account List */}
      <View className="space-y-4">
        {/* Example Bank Account 1 */}
        <View className="bg-gray-100 p-5 rounded-lg shadow-md flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name="wallet" color="green" size={25} />
            <Text className="ml-4 text-lg font-medium text-gray-800">Standard Bank</Text>
          </View>
          <TouchableOpacity className="bg-green-500 p-2 rounded-lg">
            <Text className="text-white font-medium">View</Text>
          </TouchableOpacity>
        </View>

        {/* Example Bank Account 2 */}
        <View className="bg-gray-100 p-5 rounded-lg shadow-md flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name="wallet" color="green" size={25} />
            <Text className="ml-4 text-lg font-medium text-gray-800">ABSA Bank</Text>
          </View>
          <TouchableOpacity className="bg-green-500 p-2 rounded-lg">
            <Text className="text-white font-medium">View</Text>
          </TouchableOpacity>
        </View>

        {/* Add New Bank Account */}
        <Link href="/addBankAccount">
          <View className="bg-green-500 p-4 rounded-lg flex-row items-center justify-center mt-6">
            <Ionicons name="add-circle" color="white" size={25} />
            <Text className="ml-4 text-white text-lg font-medium">Add New Bank Account</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
