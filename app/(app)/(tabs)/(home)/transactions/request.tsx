import { useRouter,Link,router } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function RequestScreen() {
  const router = useRouter();
  const [method, setMethod] = useState<string | null>(null);

  // Fetch query parameters using the router
  useEffect(() => {
    const queryMethod = router.query?.method;  // Access the 'method' query
    if (queryMethod) {
      setMethod(queryMethod as string);  // Update the state with the query param
    }
  }, [router.query]);

  return (
    <View className="flex-1 justify-center items-center bg-white p-5">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Request Information</Text>
      <Text className="text-lg text-gray-600 mb-8">
        {method
          ? `You selected: ${method.charAt(0).toUpperCase() + method.slice(1)}`
          : "No method selected"}
      </Text>

      {/* Action button */}
      <Link href="transactions/confirm" className="bg-green-500 p-4 rounded-lg mb-4 w-4/5 text-center">
        <Text className="text-white text-lg font-semibold">Confirm</Text>
      </Link>

      {/* Conditional instructions based on the method */}
      {method === 'contact' && (
        <Text className="text-gray-500 mt-4 text-center">
          Scan or select a contact to send money to.
        </Text>
      )}
      {method === 'qr' && (
        <Text className="text-gray-500 mt-4 text-center">
          Scan the recipient's QR code to send money.
        </Text>
      )}
      {method === 'bank' && (
        <Text className="text-gray-500 mt-4 text-center">
          Enter the recipient's bank account details.
        </Text>
      )}
    </View>
  );
}
