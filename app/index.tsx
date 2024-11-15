import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-intersemibold">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/(tabs)/mainmenu" style={{ color: 'blue' }}>Go to Main Menu</Link>
    </View>
  );
}