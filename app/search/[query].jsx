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
import EmptyState from "../../components/EmptyState";
import { searchPosts } from "../../lib/appwrite";
import useAppWrite from "../../lib/useAppWrite";
import VideoCard from "../../components/videoCard";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppWrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);
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
          <View className="my-6 px-4 ">
            <View>
              <Text className={"font-light text-sm text-gray-100"}>
                Search Result
              </Text>
              <Text className={"font-light text-2xl text-white"}>{query}</Text>

              <View></View>
            </View>
            <View className="w-full  mt-6 mb-8">
              <SearchInput initalQuery={query} />
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
export default Search;
