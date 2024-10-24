import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TransactionsScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-40"></View>

      {/* Page Title */}
      <View className="items-center mb-10">
        <Text className="text-2xl font-bold text-gray-800">
          Transaction History
        </Text>
        <Text className="text-lg text-gray-500">
          View your past transactions below
        </Text>
      </View>

      {/* Transaction List */}
      <View className="space-y-6">
        {/* Transaction 1 */}
        <View className="bg-gray-100 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="cash" color="green" size={25} />
          <Text className="text-gray-800 text-lg">Payment to John Doe</Text>
          <Text className="text-green-500 font-bold">-R500.00</Text>
        </View>

        {/* Transaction 2 */}
        <View className="bg-gray-100 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="cash" color="green" size={25} />
          <Text className="text-gray-800 text-lg">Refund from Store</Text>
          <Text className="text-green-500 font-bold">+R200.00</Text>
        </View>

        {/* Transaction 3 */}
        <View className="bg-gray-100 p-4 rounded-lg flex-row items-center justify-between shadow-md">
          <Ionicons name="cash" color="green" size={25} />
          <Text className="text-gray-800 text-lg">Payment to ShopX</Text>
          <Text className="text-red-500 font-bold">-R1,000.00</Text>
        </View>

        {/* Download History */}
        <Link
          href="/download"
          className="bg-green-500 p-4 rounded-lg items-center flex-row justify-between shadow-md mt-6"
        >
          <Ionicons name="download" color="white" size={25} />
          <Text className="text-white text-lg">Download History</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </Link>

        {/* Refunds */}
        <Link
          href="/refunds"
          className="bg-blue-500 p-4 rounded-lg items-center flex-row justify-between shadow-md"
        >
          <Ionicons name="search" color="white" size={25} />
          <Text className="text-white text-lg">View Refund Requests</Text>
          <Ionicons name="arrow-forward" color="white" size={25} />
        </Link>
      </View>
    </View>
  );
}
