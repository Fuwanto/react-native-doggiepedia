import { getBreedDetails, getBreedImage } from "../../lib/doggiePedia";
import Screen from "../../components/Screen";
import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, Link } from "expo-router";
import { View, Image, ScrollView, ActivityIndicator, Text } from "react-native";

export default function BreedDetail() {
  const { breedpath } = useLocalSearchParams();
  const [breedInfo, setBreedInfo] = useState(null);

  useEffect(() => {
    if (breedpath) {
      getBreedDetails(breedpath).then(setBreedInfo);
    }
  }, [breedpath]);

  return (
    <Screen>
      {breedInfo === null ? (
        <ActivityIndicator
          color="#fff"
          size="large"
          className="flex-1 justify-center items-center"
        />
      ) : (
        <>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: "#ffee00" },
              headerTintColor: "black",
              headerTitle: breedInfo.display.name,
            }}
          />
          <ScrollView className="p-4 bg-gray-800">
            <View className="items-center">
              <Image
                className="w-52 h-72 rounded-lg mb-4"
                source={{ uri: getBreedImage(breedInfo.slug) }}
              />
              <Text className="text-white text-center font-bold text-2xl mb-2">
                {breedInfo.info.personality_type}
              </Text>
              <Text className="text-white text-center text-base mb-6">
                {breedInfo.display.paragraph}
              </Text>

              {/* Additional Details Section */}
              <Text className="text-yellow-400 text-lg font-semibold mb-2">
                Adjectives
              </Text>
              <Text className="text-white text-center mb-4">
                {breedInfo.display.adjectives.a1},{" "}
                {breedInfo.display.adjectives.a2},{" "}
                {breedInfo.display.adjectives.a3}
              </Text>

              <Text className="text-yellow-400 text-lg font-semibold mb-2">
                Physical Characteristics
              </Text>
              <View className="space-y-2 mb-6">
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

              <Text className="text-yellow-400 text-lg font-semibold mb-2">
                Social Characteristics
              </Text>
              <View className="space-y-2 mb-6">
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

              {/* Link to the Group Detail */}
              <Link
                href={`/group-details/${breedInfo.display.group}`}
                className="mt-6 px-4 py-2 bg-yellow-500 rounded-full"
              >
                <Text className="text-gray-800 text-center font-semibold">
                  View Group Details
                </Text>
              </Link>
            </View>
          </ScrollView>
        </>
      )}
    </Screen>
  );
}
