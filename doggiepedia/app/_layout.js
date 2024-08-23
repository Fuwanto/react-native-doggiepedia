import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#3e210a" },
          headerTintColor: "#e9c120",
          headerTitle: "DoggiePedia",
        }}
      />
    </View>
  );
}
