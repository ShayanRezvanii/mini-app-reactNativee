/** @format */

import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Home } from "iconsax-react-native";

const TabIcon = ({ icon, color, name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarActiveTintColor: "#FFA001",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      {/* <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            <TabIcon color={color} name={"Home"} />;
          },
        }}
      /> */}
    </Tabs>
  );
};

export default TabsLayout;
