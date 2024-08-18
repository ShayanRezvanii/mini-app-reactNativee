/** @format */

import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            <TabIcon
              icon={icons.home}
              color={color}
              name={"Home"}
              focused={focused}
            />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
