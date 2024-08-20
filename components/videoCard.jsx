/** @format */

import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Video, ResizeMode } from "expo-av";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-gray-500 justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className=" w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className=" justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-semibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className="text-gray-100" numberOfLines={1}>
              {username}
            </Text>
          </View>
        </View>
        <View className="flex-col items-center justify-center  gap-[-10px] ">
          <Text className="text-white">.</Text>
          <Text className="text-white">.</Text>
          <Text className="text-white">.</Text>
        </View>
      </View>
      {play ? (
        <Video
          source={{ uri: video }}
          className=" w-full h-60 rounded-xl mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className=" w-full h-60 relative justify-center items-center mt-3  rounded-lg"
        >
          <Image
            source={{ uri: thumbnail }}
            className=" w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <View className=" rounded-full justify-center items-center w-10 h-10 bg-white absolute">
            <Text className="font-semibold">Play</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
