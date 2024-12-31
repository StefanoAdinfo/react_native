import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "@/constants";
import { images } from "@/constants";

export default function FormField({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  [key: string]: any;
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text
        className="text-xl text-gray-100 font-semibold  "
        style={{ marginBottom: 7 }}
      >
        {title}
      </Text>
      <View
        className="w-full h-16 px-4 border-black-200 focus:border-secondary "
        style={{
          backgroundColor: "#1E1E2D",
          borderWidth: 2,
          borderRadius: 10,
          padding: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        <TextInput
          className="w-full text-white font-psemibold text-base "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              style={{ position: "absolute", right: 0, bottom: -8 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
