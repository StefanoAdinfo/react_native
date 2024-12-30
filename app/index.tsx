import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <Link href="/home" className="text-blue-500">
        {" "}
        Go to Home
      </Link>
    </View>
  );
}
