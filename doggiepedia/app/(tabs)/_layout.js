import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#3e210a", borderTopWidth: 0 },
        tabBarActiveTintColor: "#e9c120",
        tabBarInactiveTintColor: "#966012",
        tabBarLabelStyle: { fontSize: 16 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="breed-of-day"
        options={{
          title: "Breed of the Day",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="paw" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
