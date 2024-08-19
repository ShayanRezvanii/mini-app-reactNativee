/** @format */

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../context/GlobalProvider";
const index = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && !isLoggedIn) return <Redirect href={"/home"} />;
  return (
    <SafeAreaView className="bg-[#161622] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className=" w-full  justify-center items-center h-[85vh] px-4">
          <Text className="text-3xl text-white">Mini APP</Text>
          <CustomButton
            title="Click Here"
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles={"w-full text-center mt-7"}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" />
    </SafeAreaView>
  );
};

export default index;
