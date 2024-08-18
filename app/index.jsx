/** @format */

import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className=" h-screen flex flex-col justify-center items-center">
      <Text className=" text-3xl text-white ">Hii ! </Text>
      <StatusBar style="auto" />
      <Link className="text-white text-2xl" href={"/home"}>
        GO
      </Link>
    </View>
  );
};

export default index;
