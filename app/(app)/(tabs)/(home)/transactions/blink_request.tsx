import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BlinkRequest() {
  const [amount, setAmount] = useState('');
  const [friend, setFriend] = useState('');

  const handleRequest = () => {
    // Add logic to handle sending a Blink request here
    console.log(`Requesting ${amount} from ${friend}`);
  };

  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-40"></View>

      {/* Page Title */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-black">Request Blink</Text>
        <Text className="text-gray-500 mt-2">Send a Blink request to your friends for money.</Text>
      </View>

      {/* Friend's Name Input */}
      <View className="mb-4">
        <Text className="text-lg text-gray-500 mb-2">Friend's Username</Text>
        <TextInput
          placeholder="Enter friend's username"
          value={friend}
          onChangeText={setFriend}
          className="border border-gray-300 p-4 rounded-lg"
        />
      </View>

      {/* Amount Input */}
      <View className="mb-8">
        <Text className="text-lg text-gray-500 mb-2">Amount</Text>
        <TextInput
          placeholder="Enter amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          className="border border-gray-300 p-4 rounded-lg"
        />
      </View>

      {/* Send Blink Request Button */}
      <TouchableOpacity
        className="bg-green-500 p-4 rounded-lg items-center"
        onPress={handleRequest}
      >
        <Ionicons name="send" color="white" size={25} />
        <Text className="text-white font-medium mt-2">Send Blink Request</Text>
      </TouchableOpacity>
    </View>
  );
}
