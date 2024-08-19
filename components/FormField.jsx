/** @format */

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const FormField = ({
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
    <View className={` ${otherStyles} space-y-2`}>
      <Text className="text-base text-gray-100 font-medium">{title}</Text>
      <View className="w-full  h-12 px-4 flex-row items-center bg-slate-900 rounded-2xl border-2  justify-between border-red-500 focus:border-[#FFA001]">
        <TextInput
          value={value}
          placeholder={placeholder}
          className="flex-1 text-white w-full font-semibold text-base"
          placeholderTextColor={"#fff"}
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={!showPassword && secure}
        />

        {secure ? (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text className="text-gray-100">
              {showPassword ? "hide" : "Show"}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default FormField;
