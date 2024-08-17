/** @format */

import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className=" h-screen flex flex-col justify-center items-center">
      <Text className=" text-3xl text-white ">Hi ! </Text>
      <StatusBar style="auto" />
      <Link href={"/profile"}>GO</Link>
    </View>
  );
};

export default index;
