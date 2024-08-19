/** @format */

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-[#161622]/90 h-full">
      <ScrollView>
        <View className=" w-full justify-center items-center min-h-[85vh] my-6 px-4">
          <Text className="text-white text-3xl font-semibold">Log in</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
