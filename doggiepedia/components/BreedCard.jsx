import { View, Text, Image, Pressable } from "react-native";
import { getBreedImage } from "../lib/doggiePedia";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function BreedCard({ breed }) {
  return (
    <Link href={`/breed-details/${breed.path}`} asChild>
      <StyledPressable className="active:opacity-70 border border-orange-300 mb-4 bg-orange-300 rounded-xl p-4 shadow-md">
        <View className="items-center">
          <Image
            source={{ uri: getBreedImage(breed.path) }}
            className="w-full h-48 rounded-lg mb-4"
            resizeMode="cover"
          />
          <Text className="text-xl font-bold text-orange-950 mb-2">
            {breed.name}
          </Text>
          {breed.alt_name && (
            <Text className="text-lg text-orange-800 mb-2 italic">
              {breed.alt_name}
            </Text>
          )}
          <Text className="text-base text-orange-950 text-center">
            {breed.about_trimmed}
          </Text>
        </View>
      </StyledPressable>
    </Link>
  );
}
