/** @format */

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  secure,
  keyboardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      className={` ${otherStyles} space-y-2 bg-slate-700 px-4  h-12  rounded-2xl  flex-row  items-center space-x-4 w-full`}
    >
      <TextInput
        value={value}
        placeholder={"Search your video ..."}
        className="flex-1 text-white w-full font-semibold text-base"
        placeholderTextColor={"#475569"}
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        secureTextEntry={!showPassword && secure}
      />

      <TouchableOpacity>
        <Text className={" text-white "}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
