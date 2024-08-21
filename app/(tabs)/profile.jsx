/** @format */

import {
  View,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import { getUserPosts, signOut } from "../../lib/appwrite";
import useAppWrite from "../../lib/useAppWrite";
import VideoCard from "../../components/videoCard";
import { useGlobalContext } from "@/context/GlobalProvider";
import InfoBox from "@/components/InfoBox";
import { router } from "expo-router";
const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, refetch } = useAppWrite(() => getUserPosts(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/sign-in");
  };
  return (
    <SafeAreaView className="bg-[#161622]/90 h-full ">
      {/* <ScrollView>
        <View className=" w-full justify-center items-center min-h-[85vh] my-6 px-4">
          <Text className="text-white text-3xl font-semibold">Log in</Text>
        </View>
      </ScrollView> */}
      <FlatList
        data={posts}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          // <Text className="text-3xl text-white">{item.title}</Text>
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className=" w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className=" w-full items-end mb-10"
              onPress={logout}
            >
              <Text className=" text-red-400">LOG OUT</Text>
            </TouchableOpacity>

            <View className="w-16 h-16 border border-white justify-center rounded-lg items-center ">
              <Image
                source={{ uri: user?.avatar }}
                resizeMode="cover"
                className="w-[90%] h-[90%] rounded-lg"
              />
            </View>
            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex-row ">
              <InfoBox
                title={posts.length || 0}
                containerStyles="mr-10"
                subTitle="Posts"
                titleStyles="text-lg"
              />
              <InfoBox
                title={"1.2k"}
                titleStyles="text-xl"
                subTitle={"Followers"}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Video's found"
            subTitle="No videos found for this search query"
          />
        )}
        refreshControl={<RefreshControl />}
      />
    </SafeAreaView>
  );
};
export default Profile;
