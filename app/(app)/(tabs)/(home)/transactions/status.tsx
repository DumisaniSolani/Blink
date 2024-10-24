import { View, Text } from 'react-native';

export default function StatusScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center p-5">
      <Text className="text-2xl font-bold text-black mb-8">Transaction Status</Text>

      {/* Status Message */}
      <View className="bg-green-100 p-4 rounded-lg w-full mb-8">
        <Text className="text-green-500 font-semibold">Transaction Completed</Text>
        <Text className="text-gray-600">Your payment has been successfully sent.</Text>
      </View>

      {/* Additional Details */}
      <View className="bg-gray-100 p-4 rounded-lg w-full mb-8">
        <Text className="font-semibold text-black">Recipient:</Text>
        <Text className="text-gray-600 mb-4">John Doe</Text>
        <Text className="font-semibold text-black">Amount Sent:</Text>
        <Text className="text-gray-600 mb-4">$200.00</Text>
        <Text className="font-semibold text-black">Payment Method:</Text>
        <Text className="text-gray-600">Bank Account</Text>
      </View>
    </View>
  );
}
