import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ReportScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-40"></View>
      {/* Title */}
      <View className="mb-6">
        <Text className="text-2xl font-bold text-black">Report an Issue</Text>
        <Text className="text-gray-500 mt-2">Please describe the issue you're facing.</Text>
      </View>

      {/* Report Type Selection */}
      <View className="mb-6">
        <Text className="text-lg font-medium text-gray-700">Select Report Type</Text>
        <View className="flex-row justify-between items-center mt-2">
          <TouchableOpacity className="bg-gray-200 p-4 rounded-lg flex-1 mx-2 items-center">
            <Ionicons name="alert" color="black" size={25} />
            <Text className="text-black font-medium mt-2">Technical Issue</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-200 p-4 rounded-lg flex-1 mx-2 items-center">
            <Ionicons name="wallet" color="black" size={25} />
            <Text className="text-black font-medium mt-2">Payment Issue</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Message Box */}
      <View className="mb-6">
        <Text className="text-lg font-medium text-gray-700">Description</Text>
        <TextInput
          style={{ height: 120 }}
          placeholder="Describe your issue here..."
          multiline
          numberOfLines={6}
          className="p-3 border rounded-lg border-gray-300 text-gray-800 mt-2"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center">
        <Text className="text-white font-bold">Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
}
