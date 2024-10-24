import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function UpgradeScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-5">
      <View className="mt-10"></View>
      {/* Header Section */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-gray-800">
          Upgrade Your Plan
        </Text>
        <Text className="text-lg text-gray-500">
          Choose a plan that fits your financial needs
        </Text>
      </View>

      {/* Free Plan */}
      <View className="bg-gray-100 p-5 rounded-lg shadow-md mb-4">
        <Text className="text-xl font-semibold text-gray-800">Free Plan</Text>
        <Text className="text-lg text-gray-600">0/month</Text>
        <Text className="text-sm text-gray-500">
          Limited access: Send up to R500/day, 1 transaction per day, Basic
          account features
        </Text>

        <TouchableOpacity className="bg-gray-400 p-4 rounded-lg items-center mt-4">
          <Text className="text-white font-medium">Current Plan</Text>
        </TouchableOpacity>
      </View>

      {/* Standard Plan */}
      <View className="bg-gray-100 p-5 rounded-lg shadow-md mb-4">
        <Text className="text-xl font-semibold text-gray-800">
          Standard Plan
        </Text>
        <Text className="text-lg text-gray-600">R100/month</Text>
        <Text className="text-sm text-gray-500">
          Send up to R2,500/day, 5 transactions per day, Standard account
          features, Access to financial reports
        </Text>

        <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center mt-4">
          <Text className="text-white font-medium">Upgrade to Standard</Text>
        </TouchableOpacity>
      </View>

      {/* Premium Plan */}
      <View className="bg-gray-100 p-5 rounded-lg shadow-md mb-4">
        <Text className="text-xl font-semibold text-gray-800">
          Premium Plan
        </Text>
        <Text className="text-lg text-gray-600">R500/month</Text>
        <Text className="text-sm text-gray-500">
          Send up to R10,000/day, Unlimited transactions, Access to advanced
          financial tools, Dedicated 24/7 support, Priority customer service
        </Text>

        <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center mt-4">
          <Text className="text-white font-medium">Upgrade to Premium</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View className="mt-8">
        <Text className="text-xl font-semibold text-gray-800 mb-4">
          Why Upgrade?
        </Text>

        <TouchableOpacity className="bg-blue-100 p-4 rounded-lg shadow-md mb-3 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons name="checkmark-circle-outline" color="green" size={25} />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              Higher Transaction Limits
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-blue-100 p-4 rounded-lg shadow-md mb-3 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons name="checkmark-circle-outline" color="green" size={25} />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              Unlimited Transactions
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-blue-100 p-4 rounded-lg shadow-md mb-3 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons name="checkmark-circle-outline" color="green" size={25} />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              Access to Financial Tools & Reports
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-blue-100 p-4 rounded-lg shadow-md mb-3 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons name="checkmark-circle-outline" color="green" size={25} />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              Priority Support
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-blue-100 p-4 rounded-lg shadow-md mb-3 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons name="checkmark-circle-outline" color="green" size={25} />
            <Text className="ml-4 text-lg font-medium text-gray-800">
              Personalized Financial Advice
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Current Plan Section */}
      <View className="mt-8 p-5 bg-gray-100 rounded-lg shadow-md">
        <Text className="text-lg font-semibold text-gray-800">
          Current Plan
        </Text>
        <Text className="text-lg text-gray-600">Free Plan - R0/month</Text>
        <Text className="text-sm text-gray-500">
          Next Payment Due: 2024-10-15
        </Text>
      </View>
      <View className="mt-10"></View>
    </ScrollView>
  );
}
