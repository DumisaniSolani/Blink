import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

export default function SendScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-40"></View>

      {/* Title Section */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-black">Send Money</Text>
        <Text className="text-gray-500 mt-2">Choose how you'd like to send money.</Text>
      </View>

      {/* Send to Contact Button */}
      <Link href="transactions/request?method=contact" className="flex-row justify-between items-center bg-green-500 p-4 rounded-lg mb-4">
        <Ionicons name="person-add" color="white" size={25} />
        <Text className="text-white font-medium">Send to Contact</Text>
      </Link>

      {/* Send via QR Code Button */}
      <Link href="transactions/request?method=qr" className="flex-row justify-between items-center bg-blue-500 p-4 rounded-lg mb-4">
        <Ionicons name="qr-code" color="white" size={25} />
        <Text className="text-white font-medium">Send via QR Code</Text>
      </Link>

      {/* Send via Bank Account Button */}
      <Link href="transactions/request?method=bank" className="flex-row justify-between items-center bg-yellow-500 p-4 rounded-lg mb-4">
        <Ionicons name="wallet" color="white" size={25} />
        <Text className="text-white font-medium">Send via Bank Account</Text>
      </Link>
    </View>
  );
}
