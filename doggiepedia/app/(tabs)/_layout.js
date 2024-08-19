import { Tabs } from "expo-router";

import { useEffect } from "react";
import { check } from "prettier";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 16 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="breed-of-day"
        options={{
          title: "Breed of the Day",
        }}
      />
    </Tabs>
  );
}
