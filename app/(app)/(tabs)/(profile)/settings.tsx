import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-10"></View>
      {/* Header Section */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-gray-800">Settings</Text>
        <Text className="text-lg text-gray-500">Manage your account preferences</Text>
      </View>

      {/* Notifications Settings */}
      <TouchableOpacity className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="notifications-outline" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Notifications</Text>
        </View>
        <Text className="text-lg font-medium text-gray-700">On</Text>
      </TouchableOpacity>

      {/* Privacy Settings */}
      <TouchableOpacity className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="lock-closed-outline" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Privacy</Text>
        </View>
        <Text className="text-lg font-medium text-gray-700">High</Text>
      </TouchableOpacity>

      {/* Language Settings */}
      <TouchableOpacity className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="language-outline" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Language</Text>
        </View>
        <Text className="text-lg font-medium text-gray-700">English</Text>
      </TouchableOpacity>

      {/* Biometrics Settings */}
      <TouchableOpacity className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="finger-print" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Biometrics</Text>
        </View>
        <Text className="text-lg font-medium text-gray-700">Enabled</Text>
      </TouchableOpacity>

      {/* Two-Factor Authentication (2FA) */}
      <TouchableOpacity className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="shield-checkmark-outline" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Two-Factor Authentication</Text>
        </View>
        <Text className="text-lg font-medium text-gray-700">Active</Text>
      </TouchableOpacity>

      {/* Security Settings */}
      <TouchableOpacity className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="shield-outline" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Security</Text>
        </View>
        <Text className="text-lg font-medium text-gray-700">High</Text>
      </TouchableOpacity>

      {/* Change Password */}
      <TouchableOpacity className="bg-gray-100 p-5 rounded-lg shadow-md mb-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="key-outline" color="green" size={25} />
          <Text className="ml-4 text-lg font-medium text-gray-800">Change Password</Text>
        </View>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity className="bg-red-500 p-4 rounded-lg items-center mt-6">
        <Text className="text-white text-lg font-medium">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
