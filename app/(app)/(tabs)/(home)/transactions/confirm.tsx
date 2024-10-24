import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function ConfirmScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center p-5">
      <Text className="text-2xl font-bold text-black mb-8">Confirm Your Transaction</Text>
      <Text className="text-gray-500 mb-8">Please review the transaction details and confirm the transfer.</Text>

      {/* Example transaction details */}
      <View className="bg-gray-100 p-4 rounded-lg w-full mb-8">
        <Text className="font-semibold text-black">Recipient:</Text>
        <Text className="text-gray-600 mb-4">John Doe</Text>
        <Text className="font-semibold text-black">Amount:</Text>
        <Text className="text-gray-600 mb-4">$200.00</Text>
        <Text className="font-semibold text-black">Payment Method:</Text>
        <Text className="text-gray-600">Bank Account</Text>
      </View>

      {/* Confirm Button */}
      <Link href="transactions/status" className="bg-green-500 p-4 rounded-lg flex-row justify-center items-center mb-4">
        <Text className="text-white font-medium">Confirm Transaction</Text>
      </Link>
    </View>
  );
}
