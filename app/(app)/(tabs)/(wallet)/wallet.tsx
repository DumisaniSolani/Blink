import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg'; // Import QR code library

export default function WalletScreen() {
  // Sample user data to generate the QR code
  const userQRCodeValue = "user123"; // This could be the user's unique identifier or wallet address

  return (
    <View className="flex-1 justify-center items-center bg-white p-5">

      {/* QR Code Display */}
      <View className="items-center mb-10">
        <Text className="text-lg text-gray-500 mb-2">Your Payment QR Code</Text>
        <QRCode
          value={userQRCodeValue}
          size={150} // Size of the QR code
        />
        <Text className="text-gray-500 mt-2">Scan this code to make a payment</Text>
      </View>

      {/* Wallet Actions */}
      <View className="flex-row justify-center w-full mb-10 space-x-4">
        
        {/* Add Funds Button */}
        <Link href="/add" className="bg-green-500 p-4 rounded-lg items-center w-32 justify-center">
          <Ionicons name="wallet" color="white" size={25} />
          <Text className="text-white font-medium mt-2">Add Funds</Text>
        </Link>

        {/* Manage Wallet Button */}
        <Link href="/manage" className="bg-blue-500 p-4 rounded-lg items-center w-32 justify-center">
          <Ionicons name="settings" color="white" size={25} />
          <Text className="text-white font-medium mt-2">Manage Wallet</Text>
        </Link>

      </View>
    </View>
  );
}
