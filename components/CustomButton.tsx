import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading = false,
}: {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      style={{ backgroundColor: "#FF8E01", borderRadius: 8, minHeight: 50 }}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-xl ${textStyles}`}>
        {title}
      </Text>

      {/* {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={{ marginLeft: 8 }}
        />
      )} */}
    </TouchableOpacity>
  );
}
