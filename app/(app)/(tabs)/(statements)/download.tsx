import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DownloadHistoryScreen() {
  const downloadFile = async () => {
    try {
      const url = 'https://example.com/path/to/your/file.csv';  // Replace this with the actual file URL
      const fileUri = FileSystem.documentDirectory + 'transaction_history.csv';

      const downloadResumable = FileSystem.createDownloadResumable(
        url,
        fileUri,
        {},
        (downloadProgress) => {
          const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
          console.log(`Download is ${progress * 100}% complete`);
        }
      );

      const { uri } = await downloadResumable.downloadAsync();
      console.log('Finished downloading to:', uri);
      alert('Download Complete: ' + uri);

    } catch (error) {
      console.error(error);
      alert('Download failed, please try again.');
    }
  };

  return (
    <View className="flex-1 bg-white p-5">
       <View className="mt-40"></View>
      <View className="items-center mb-10">
        <Text className="text-2xl font-bold text-gray-800">Download Transaction History</Text>
        <Text className="text-lg text-gray-500">You can download your transaction history below.</Text>
      </View>

      <TouchableOpacity
        onPress={downloadFile}
        className="bg-green-500 p-4 rounded-lg items-center flex-row justify-between shadow-md"
      >
        <Ionicons name="download" color="white" size={25} />
        <Text className="text-white text-lg">Download History</Text>
        <Ionicons name="arrow-forward" color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
}
