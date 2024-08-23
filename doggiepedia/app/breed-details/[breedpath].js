import { getBreedDetails, getBreedImage } from "../../lib/doggiePedia";
import Screen from "../../components/Screen";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, Link } from "expo-router";
import { View, Image, ScrollView, Text } from "react-native";

export default function BreedDetail() {
  const { breedpath } = useLocalSearchParams();
  const [breedInfo, setBreedInfo] = useState(null);

  useEffect(() => {
    if (breedpath) {
      getBreedDetails(breedpath).then(setBreedInfo);
    }
  }, [breedpath]);

  if (!breedInfo) {
    return <Loader />;
  }

  return (
    <Screen>
      <>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#3e210a" },
            headerTintColor: "#e9c120",
            headerTitle: breedInfo.display.name,
          }}
        />
        <ScrollView className="p-4 bg-orange-300">
          <View className="items-center">
            <View className="items-center mb-6">
              <Image
                className="w-64 h-52 rounded-lg mb-6"
                source={{ uri: getBreedImage(breedInfo.slug) }}
                resizeMode="cover"
              />
              <Text className="text-orange-950 text-center text-lg leading-relaxed mb-8 px-6">
                {breedInfo.display.paragraph}
              </Text>
            </View>

            {/* Additional Details Section */}
            <View className="w-full bg-orange-900 rounded-lg p-4 mb-6">
              <Text className="text-yellow-400 text-lg font-semibold mb-3 text-center">
                Personality Type
              </Text>
              <Text className="text-white text-center text-base">
                {breedInfo.info.personality_type}
              </Text>
            </View>

            <View className="w-full bg-orange-900 rounded-xl p-5 mb-6">
              <Text className="text-yellow-400 text-lg font-semibold mb-3 text-center">
                Adjectives
              </Text>
              <Text className="text-white text-center text-base">
                {breedInfo.display.adjectives.a1},{" "}
                {breedInfo.display.adjectives.a2},{" "}
                {breedInfo.display.adjectives.a3}
              </Text>
            </View>

            <View className="w-full bg-orange-900 rounded-lg p-4 mb-6">
              <Text className="text-yellow-400 text-lg font-semibold mb-2">
                Physical Characteristics
              </Text>
              <View className="space-y-2">
                <Text className="text-white text-left">
                  Weight (Male): {breedInfo.physical.weight_range.male.min} -{" "}
                  {breedInfo.physical.weight_range.male.max} lbs
                </Text>
                <Text className="text-white text-left">
                  Weight (Female): {breedInfo.physical.weight_range.female.min}{" "}
                  - {breedInfo.physical.weight_range.female.max} lbs
                </Text>
                <Text className="text-white text-left">
                  Height (Male): {breedInfo.physical.height_range.male.min} -{" "}
                  {breedInfo.physical.height_range.male.max} inches
                </Text>
                <Text className="text-white text-left">
                  Height (Female): {breedInfo.physical.height_range.female.min}{" "}
                  - {breedInfo.physical.height_range.female.max} inches
                </Text>
                <Text className="text-white text-left">
                  Lifespan: {breedInfo.physical.lifespan.min} -{" "}
                  {breedInfo.physical.lifespan.max} years
                </Text>
              </View>
            </View>

            <View className="w-full bg-orange-900 rounded-lg p-4 mb-6">
              <Text className="text-yellow-400 text-lg font-semibold mb-2">
                Social Characteristics
              </Text>
              <View className="space-y-2">
                <Text className="text-white text-left">
                  Friendly: {breedInfo.social.friendly}/10
                </Text>
                <Text className="text-white text-left">
                  Playful: {breedInfo.social.playful}/10
                </Text>
                <Text className="text-white text-left">
                  Protective: {breedInfo.social.protective}/10
                </Text>
                <Text className="text-white text-left">
                  Bark: {breedInfo.social.bark}/10
                </Text>
              </View>
            </View>

            <View className="w-full bg-orange-900 rounded-lg p-4 mb-6">
              <Text className="text-yellow-400 text-lg font-semibold mb-2">
                Other Details
              </Text>
              <View className="space-y-2">
                <Text className="text-white text-left">
                  Daily Walk: {breedInfo.info.daily_walk.min} -{" "}
                  {breedInfo.info.daily_walk.max} hours
                </Text>
                <Text className="text-white text-left">
                  Trainability: {breedInfo.info.trainability}/10
                </Text>
                <Text className="text-white text-left">
                  Kids Compatibility: {breedInfo.info.kids}/10
                </Text>
                <Text className="text-white text-left">
                  Pets Compatibility: {breedInfo.info.pets}/10
                </Text>
                <Text className="text-white text-left">
                  Required Space: {breedInfo.info.required_space}/10
                </Text>
                <Text className="text-white text-left">
                  Monthly Cost: ${breedInfo.info.monthly_cost.min} - $
                  {breedInfo.info.monthly_cost.max}
                </Text>
              </View>
            </View>

            <View className="p-4 mb-6 items-center">
              {/* Link to the Group Detail */}
              <Link
                href={`/group-details/${breedInfo.display.group}`}
                className="w-full px-4 py-4 bg-orange-900 rounded-lg"
              >
                <Text className="text-yellow-400 text-center font-semibold">
                  View Group Details
                </Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </>
    </Screen>
  );
}
