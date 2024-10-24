import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ManagePaymentsScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-40"></View>

      {/* Page Title */}
      <View className="items-center mb-10">
        <Text className="text-2xl font-bold text-gray-800">Manage Payment Methods</Text>
        <Text className="text-lg text-gray-500">View and manage your saved payment methods</Text>
      </View>

      {/* Saved Payment Methods */}
      <View className="space-y-6">
        {/* Saved Credit/Debit Card */}
        <View className="bg-gray-100 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="card" color="green" size={25} />
          <Text className="text-gray-800 text-lg">Visa **** 1234</Text>
          <TouchableOpacity className="bg-green-500 p-2 rounded-full">
            <Ionicons name="pencil" color="white" size={20} />
          </TouchableOpacity>
        </View>

        {/* Saved PayPal */}
        <View className="bg-gray-100 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="logo-paypal" color="blue" size={25} />
          <Text className="text-gray-800 text-lg">PayPal (dumisolani@email.com)</Text>
          <TouchableOpacity className="bg-green-500 p-2 rounded-full">
            <Ionicons name="pencil" color="white" size={20} />
          </TouchableOpacity>
        </View>

        {/* Saved Apple Pay */}
        <View className="bg-gray-100 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="logo-apple" color="gray" size={25} />
          <Text className="text-gray-800 text-lg">Apple Pay</Text>
          <TouchableOpacity className="bg-green-500 p-2 rounded-full">
            <Ionicons name="pencil" color="white" size={20} />
          </TouchableOpacity>
        </View>

        {/* Add New Payment Method */}
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center flex-row justify-between shadow-md mt-6">
          <Ionicons name="add-circle" color="white" size={25} />
          <Text className="text-white text-lg">Add New Payment Method</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </TouchableOpacity>
      </View>

    </View>
  );
}
