/** @format */

import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { router, usePathname } from "expo-router";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  secure,
  keyboardType,
  initalQuery,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const pathName = usePathname();
  const [query, setquery] = useState(initalQuery || "");
  return (
    <View
      className={` ${otherStyles} space-y-2 bg-slate-700 px-4  h-12  rounded-2xl  flex-row  items-center space-x-4 w-full`}
    >
      <TextInput
        value={query}
        placeholder={"Search your video ..."}
        className="flex-1 text-white w-full font-semibold text-base"
        placeholderTextColor={"#CDCDE0"}
        onChangeText={(e) => setquery(e)}
        keyboardType={keyboardType}
        secureTextEntry={!showPassword && secure}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database"
            );
          }
          if (pathName.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Text className={" text-white "}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
