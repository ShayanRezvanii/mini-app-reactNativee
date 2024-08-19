/** @format */

import { View, Text, ScrollView, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-[#161622]/90 h-full ">
      {/* <ScrollView>
        <View className=" w-full justify-center items-center min-h-[85vh] my-6 px-4">
          <Text className="text-white text-3xl font-semibold">Log in</Text>
        </View>
      </ScrollView> */}
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className={"font-light text-sm text-gray-100"}>
                  Welcome Back
                </Text>
                <Text className={"font-light text-2xl text-white"}>
                  Mini APP
                </Text>
              </View>

              <View className="mt-1.5">
                <Text className="text-2xl text-white">LOGO</Text>
              </View>
            </View>
            <SearchInput />
            <View className=" w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100">Lastest Videos</Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
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
