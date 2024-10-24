import { Link } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HelpCenterScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-5">
      {/* Header Section */}
      <View className="mt-20"></View>
      <View className="mb-8">
        <Text className="text-2xl font-bold text-gray-800">Help Center</Text>
        <Text className="text-lg text-gray-500">
          How can we assist you today?
        </Text>
      </View>

      {/* Frequently Asked Questions Section */}
      <View className="mb-8">
        <Text className="text-xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions
        </Text>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg shadow-md mb-3">
          <View className="flex-row items-center">
            <Ionicons name="help-circle-outline" size={24} color="gray" />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              How do I add funds to my account?
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg shadow-md mb-3">
          <View className="flex-row items-center">
            <Ionicons name="help-circle-outline" size={24} color="gray" />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              How can I upgrade my plan?
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg shadow-md mb-3">
          <View className="flex-row items-center">
            <Ionicons name="help-circle-outline" size={24} color="gray" />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              How do I check my transaction history?
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg shadow-md mb-3">
          <View className="flex-row items-center">
            <Ionicons name="help-circle-outline" size={24} color="gray" />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              How do I set up biometric login?
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Contact Us Section */}
      <View className="mb-8">
        <Text className="text-xl font-semibold text-gray-800 mb-4">
          Need more help?
        </Text>

        <Link
          href="/contact"
          className="bg-blue-500 p-4 rounded-lg items-center mb-3"
        >
          <Text className="text-white font-medium text-center">Contact Us</Text>
        </Link>

        <Link
          href="/report"
          className="bg-red-500 p-4 rounded-lg items-center mb-3"
        >
          <Text className="text-white font-medium text-center">
            Report an Issue
          </Text>
        </Link>
      </View>

      {/* Additional Help Resources Section */}
      <View className="mb-8">
        <Text className="text-xl font-semibold text-gray-800 mb-4">
          Additional Help Resources
        </Text>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg shadow-md mb-3">
          <View className="flex-row items-center">
            <Ionicons name="book-outline" size={24} color="gray" />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              User Manual
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg shadow-md mb-3">
          <View className="flex-row items-center">
            <Ionicons name="shield-checkmark-outline" size={24} color="gray" />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              Security Guidelines
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg shadow-md mb-3">
          <View className="flex-row items-center">
            <Ionicons name="call-outline" size={24} color="gray" />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              Customer Support Hotline
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-10"></View>
    </ScrollView>
  );
}
