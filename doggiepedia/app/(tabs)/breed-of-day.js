import { useEffect, useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import Screen from "../../components/Screen";
import { getBreedOfTheDay, getBreedImage } from "../../lib/doggiePedia";
import { useRouter } from "expo-router";

export default function BreedOfDay() {
  const [breed, setBreed] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getBreedOfTheDay().then(setBreed);
  }, []);

  const handleViewDetails = () => {
    if (breed) {
      router.push(`/breed-details/${breed.path}`);
    }
  };

  if (!breed) {
    return <Text className="text-center text-2xl font-bold">Loading...</Text>;
  }

  return (
    <Screen>
      <View className="flex-1 items-center justify-center p-4">
        <Image
          source={{ uri: getBreedImage(breed.path) }}
          style={{ width: 200, height: 200 }}
          className="mb-4 rounded-lg"
        />
        <Text className="text-center text-2xl font-bold mb-4">
          {breed.name}
        </Text>
        <Pressable
          onPress={handleViewDetails}
          className="bg-yellow-500 px-4 py-2 rounded-lg"
        >
          <Text className="text-white text-center font-semibold">
            Ver detalles
          </Text>
        </Pressable>
      </View>
    </Screen>
  );
}
