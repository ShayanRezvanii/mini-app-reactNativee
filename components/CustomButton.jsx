/** @format */

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-[#FFA001] justify-center items-center p-2 rounded-lg ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {!isLoading ? (
        <Text className={`font-semibold ${textStyles} text-lg`}>{title}</Text>
      ) : (
        <Text className={`font-semibold ${textStyles} text-lg`}>
          Is Loading...
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
