import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ContactUsScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="mt-20"></View>
      <Text className="text-2xl font-bold text-gray-800 mb-6">Contact Us</Text>

      {/* Contact Form */}
      <View className="space-y-6">
        {/* Name Input */}
        <View>
          <Text className="text-lg font-medium text-gray-800">Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            className="p-3 border rounded-lg border-gray-300 text-gray-800"
          />
        </View>

        {/* Email Input */}
        <View>
          <Text className="text-lg font-medium text-gray-800">
            Email Address
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            className="p-3 border rounded-lg border-gray-300 text-gray-800"
          />
        </View>

        {/* Subject Input */}
        <View>
          <Text className="text-lg font-medium text-gray-800">Subject</Text>
          <TextInput
            style={styles.input}
            placeholder="Subject of your query"
            className="p-3 border rounded-lg border-gray-300 text-gray-800"
          />
        </View>

        {/* Message Input */}
        <View>
          <Text className="text-lg font-medium text-gray-800">Message</Text>
          <TextInput
            style={[styles.input, { height: 150 }]}
            placeholder="Write your message here"
            multiline
            numberOfLines={6} // Increase the number of lines
            className="p-3 border rounded-lg border-gray-300 text-gray-800"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg items-center">
          <Text className="text-white font-medium">Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e0e0e0",
    backgroundColor: "#f9f9f9",
    marginBottom: 12,
  },
});
