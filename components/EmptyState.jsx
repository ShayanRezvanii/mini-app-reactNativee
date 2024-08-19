/** @format */

import { View, Text } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subTitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Text className={"font-light text-2xl text-white"}>{title}</Text>
      <Text className={"font-light text-sm text-gray-100"}>{subTitle}</Text>
      <CustomButton
        title={"Create Video"}
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
