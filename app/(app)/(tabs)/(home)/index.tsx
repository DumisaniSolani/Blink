import { Link,router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSession } from "../../../../ctx";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IndexScreen() {
  const { signOut } = useSession();
  return (
    <View className="flex-1 bg-white p-5">
      {/* Spacer to push content lower */}
      {/* <View className="mt-20"></View> */}
      <View className="mt-40"></View>

      {/* Balance Display */}
      {/* Wallet Balance */}
      <View className="items-center mb-10">
        <Text className="text-lg text-gray-500">Balance</Text>
        <Text className="text-4xl font-bold text-black mt-2">R100 000.00</Text>
      </View>

      <View className="mt-40"></View>
      <View className="flex-row justify-around w-full mb-10">
        <TouchableOpacity
          className="bg-green-500 p-4 rounded-lg items-center flex-1 mx-2"
          onPress={() => router.push("/transactions/send")} // Navigate to send screen
        >
          <Ionicons name="send" color="white" size={25} />
          <Text className="text-white font-medium mt-2">Send</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center flex-1 mx-2">
          <Ionicons name="wallet" color="white" size={25} />
          <Text className="text-white font-medium mt-2">Add</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/transactions/blink_request")} className="bg-green-500 p-4 rounded-lg items-center flex-1 mx-2">
          <Ionicons name="download" color="white" size={25} />
          <Text className="text-white font-medium mt-2">Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
