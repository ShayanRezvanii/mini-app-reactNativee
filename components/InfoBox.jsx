/** @format */

import { View, Text } from "react-native";
import React from "react";

const InfoBox = ({ title, subTitle, containerStyles, titleStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-semibold ${titleStyles}`}>
        {title}
      </Text>
      <Text className="text-sm text-center font-medium text-gray-100">
        {subTitle}
      </Text>
    </View>
  );
};

export default InfoBox;
