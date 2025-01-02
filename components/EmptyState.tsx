import {
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

export default function EmptyState({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <View className="flex justify-center items-center px-4">
      <Image
        source={images.empty}
        resizeMode="contain"
        style={{ width: 270, height: 216 }}
      />

      <Text className="text-md font-pmedium text-gray-100">{title}</Text>
      <Text className="text-2xl text-center font-psemibold text-white mt-4">
        {subtitle}
      </Text>

      <CustomButton
        title="Back to Explore"
        handlePress={() => router.push("/home")}
        containerStyles="w-full mt-5"
      />
    </View>
  );
}
