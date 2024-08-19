import { getBreedGroupData, getBreedIGroupImage } from "../../lib/doggiePedia";
import Screen from "../../components/Screen";
import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Image, ScrollView, ActivityIndicator, Text } from "react-native";

export default function GroupDetail() {
  const { groupid } = useLocalSearchParams();
  const [groupInfo, setGroupInfo] = useState(null);

  useEffect(() => {
    if (groupid) {
      getBreedGroupData(groupid).then(setGroupInfo);
    }
  }, [groupid]);

  return (
    <Screen>
      {groupInfo === null ? (
        <ActivityIndicator
          color="#fff"
          size="large"
          className="flex-1 justify-center items-center"
        />
      ) : (
        <>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: "#ffcc00" },
              headerTintColor: "black",
              headerTitle: groupInfo.name,
            }}
          />
          <ScrollView className="p-4 bg-gray-100">
            <View className="items-center mb-6">
              <Image
                className="w-48 h-48 rounded-full border-4 border-yellow-400"
                source={{ uri: getBreedIGroupImage(groupInfo.slug) }}
              />
              <Text className="text-2xl font-bold text-gray-800 mt-4">
                {groupInfo.name}
              </Text>
              <Text className="text-gray-600 text-center mt-2 px-4">
                {groupInfo.description}
              </Text>
            </View>
          </ScrollView>
        </>
      )}
    </Screen>
  );
}
