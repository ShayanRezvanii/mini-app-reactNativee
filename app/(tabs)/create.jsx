/** @format */

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import FormField from "@/components/FormField";
import { Video, ResizeMode } from "expo-av";
import CustomButton from "@/components/CustomButton";
import * as imagePicker from "expo-image-picker";
import { router } from "expo-router";
import { createVideo } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";
const Create = () => {
  const { user } = useGlobalContext();
  const [uploading, setuploading] = useState(false);
  const [form, setform] = useState({
    title: "test",
    video: "https://test",
    thumbnail: "https://test",
    prompt: "222",
  });

  const openPicker = async (selectType) => {
    let res = await imagePicker.launchImageLibraryAsync({
      mediaTypes:
        selectType === "image"
          ? imagePicker.MediaTypeOptions.Images
          : imagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!res.canceled) {
      if (selectType === "image") {
        setform({ ...form, thumbnail: res.assets[0] });
      }
      if (selectType === "video") {
        setform({ ...form, video: res.assets[0] });
      }
    }
  };

  const submit = async () => {
    if (!form.prompt || !form.thumbnail || !form.title || !form.video) {
      return Alert.alert("Please fill in all the fields");
    }
    setuploading(true);

    try {
      await createVideo({
        ...form,
        userId: user?.$id,
      });
      Alert.alert("Success", "Post Uploaded");
      router.push("/home");
    } catch (error) {
      console.log(user);

      Alert.alert("Error", error.message);
    } finally {
      setform({
        title: "",
        video: null,
        thumbnail: null,
        prompt: "",
      });
      setuploading(false);
    }
  };
  return (
    <SafeAreaView className="bg-black h-full ">
      <ScrollView className=" px-4 my-6">
        <Text className="  text-white text-2xl font-semibold">UploadVideo</Text>

        <FormField
          title={"Video Title "}
          value={form.title}
          handleChangeText={(e) => setform({ ...form, title: e })}
          otherStyles={"mt-10"}
          placeholder={"Enter Video Title"}
        />

        <View className=" mt-7 space-y-2">
          <Text className=" text-base to-gray-100 font-semibold">
            Upload Video
          </Text>
          <TouchableOpacity onPress={() => openPicker("video")}>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                className=" w-full h-64 rounded-2xl"
                resizeMode={ResizeMode.COVER}
              />
            ) : (
              <View className=" w-full px-4 bg-slate-800 h-40 justify-center rounded-2xl items-center">
                <View className=" h-14 w-fit px-3 border border-dashed border-white justify-center items-center ">
                  <Text className="text-white">UPLOAD</Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
          <View className=" mt-7 space-y-2">
            <Text className="text-gray-100 text-base font-medium">
              Thumbnail Image
            </Text>

            <TouchableOpacity onPress={() => openPicker("image")}>
              {form.thumbnail ? (
                <Image
                  source={{ uri: form.thumbnail.uri }}
                  resizeMode="cover"
                  className="w-full h-64 rounded-2xl"
                />
              ) : (
                <View className=" w-full px-4 bg-slate-800 h-16 justify-center rounded-2xl items-center">
                  <View className=" h-5  w-fit px-3  border border-dashed border-white justify-center items-center ">
                    <Text className="text-sm text-gray-100 font-medium">
                      Choose a file
                    </Text>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <FormField
          title={"AI prompt "}
          value={form.prompt}
          handleChangeText={(e) => setform({ ...form, prompt: e })}
          otherStyles={"mt-7"}
          placeholder={"Enter prompt Title"}
        />

        <CustomButton
          title={"Submit"}
          handlePress={submit}
          containerStyles={"mt-7"}
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
