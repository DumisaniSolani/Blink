import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AddScreen() {
  return (
    <View className="flex-1 bg-white p-5">
<View className="mt-40"></View>
      {/* Page Title */}
      <View className="items-center mb-10">
        <Text className="text-2xl font-bold text-gray-800">Add Funds to Your Wallet</Text>
        <Text className="text-lg text-gray-500">Select a payment method</Text>
      </View>

      {/* Add Funds Options */}
      <View className="space-y-6">
        {/* Bank Transfer Option */}
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="cash" color="white" size={25} />
          <Text className="text-white text-lg">Bank Transfer</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </TouchableOpacity>

        {/* Credit/Debit Card Option */}
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="card" color="white" size={25} />
          <Text className="text-white text-lg">Credit/Debit Card</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </TouchableOpacity>

        {/* PayPal Option */}
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="logo-paypal" color="white" size={25} />
          <Text className="text-white text-lg">PayPal</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </TouchableOpacity>

        {/* Apple Pay Option */}
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="logo-apple" color="white" size={25} />
          <Text className="text-white text-lg">Apple Pay</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </TouchableOpacity>

        {/* Google Pay Option */}
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="logo-google" color="white" size={25} />
          <Text className="text-white text-lg">Google Pay</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </TouchableOpacity>
      </View>

    </View>
  );
}
