/** @format */

import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser, getCurrentUser } from "../../lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

const signUp = () => {
  const { setUser, setLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.email || !form.password || !form.username) {
      Alert.alert("Error", "Please Complete All Fields");
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);

      setUser(result);
      setLoggedIn(true);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-[#161622]/90 h-full">
      <ScrollView>
        <View className=" w-full justify-start items-start min-h-[82vh] my-6 px-4">
          <Text className="text-white text-3xl font-semibold">Sign Up</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={"mt-7 w-full"}
            keyboardType="username"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={"mt-7 w-full"}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            secure
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={"mt-7 w-full"}
            keyboardType="default" // Default keyboard type for password
          />

          <CustomButton
            containerStyles={"mt-7 w-full"}
            title={"Sign in"}
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className="w-full flex-row gap-x-2 justify-center items-center mt-6">
            <Text className="text-gray-100 font-semibold">
              Have an account already?
            </Text>
            <Link href={"/sign-in"} className=" font-semibold text-[#FFA001]">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;
