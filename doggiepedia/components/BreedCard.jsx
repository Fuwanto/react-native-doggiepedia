import { View, Text, Image, Pressable } from "react-native";
import { getBreedImage } from "../lib/doggiePedia";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function BreedCard({ breed }) {
  return (
    <Link href={`/breed-details/${breed.path}`} asChild>
      <StyledPressable className="active:opacity-70 border border-gray-300 mb-4 bg-white/80 rounded-xl p-4 shadow-md">
        <View className="flex-row items-center space-x-4">
          <Image
            source={{ uri: getBreedImage(breed.path) }}
            className="w-20 h-20 rounded-lg"
          />
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-900">
              {breed.name}
            </Text>
            <Text className="text-sm text-gray-500 mt-1">{breed.alt_name}</Text>
            <Text className="text-sm text-gray-600 mt-2">
              {breed.about_trimmed}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}
