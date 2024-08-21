/** @format */

import {
  View,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts } from "../../lib/appwrite";
import { getLatestPosts } from "../../lib/appwrite";
import useAppWrite from "../../lib/useAppWrite";
import { useGlobalContext } from "@/context/GlobalProvider";
import VideoCard from "../../components/videoCard";

const Home = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  const { data: posts, refetch } = useAppWrite(getAllPosts);
  const { data: latestPost } = useAppWrite(getLatestPosts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  console.log(posts);

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
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className={"font-light text-sm text-gray-100"}>
                  Welcome Back
                </Text>
                <Text className={"font-light text-2xl text-white"}>
                  {user?.username}
                </Text>
              </View>

              <View className="mt-1.5">
                <Text className="text-2xl text-white">LOGO</Text>
              </View>
            </View>
            <SearchInput />
            <View className=" w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100">Lastest Videos</Text>
              <Trending posts={latestPost ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Video's found"
            subTitle="Be the first one to upload a video"
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
        refreshControl={<RefreshControl />}
      />
    </SafeAreaView>
  );
};

export default Home;
