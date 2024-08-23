import { getBreedGroupData, getBreedIGroupImage } from "../../lib/doggiePedia";
import Screen from "../../components/Screen";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Image, ScrollView, Text } from "react-native";

export default function GroupDetail() {
  const { groupid } = useLocalSearchParams();
  const [groupInfo, setGroupInfo] = useState(null);

  useEffect(() => {
    if (groupid) {
      getBreedGroupData(groupid).then(setGroupInfo);
    }
  }, [groupid]);

  if (!groupInfo) {
    return <Loader />;
  }

  return (
    <Screen>
      <>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#3e210a" },
            headerTintColor: "#e9c120",
            headerTitle: groupInfo.name,
          }}
        />
        <ScrollView className="w-full bg-orange-300 rounded-lg p-4 mb-6">
          <View className="items-center mb-6">
            <Image
              className="w-64 h-52 rounded-lg mb-6"
              source={{ uri: getBreedIGroupImage(groupInfo.slug) }}
            />
            <Text className="text-2xl font-bold text-orange-950 mt-4">
              {groupInfo.name}
            </Text>
            <Text className="text-base text-orange-950 text-center">
              {groupInfo.description}
            </Text>
          </View>
        </ScrollView>
      </>
    </Screen>
  );
}
