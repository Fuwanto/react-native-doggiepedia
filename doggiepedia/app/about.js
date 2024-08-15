import { View, Text } from "react-native";

export default function About() {
  return (
    <View className="flex-1 pt-4 px-2">
      <Text className="text-lg font-bold">About Doggiepedia</Text>
      <Text className="mt-2">
        Doggiepedia is a mobile app that provides information about dog breeds.
      </Text>
    </View>
  );
}
