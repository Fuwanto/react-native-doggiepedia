import { View } from "react-native";

export default function Screen({ children }) {
  return <View className="flex-1 pt-4 px-2 bg-orange-950">{children}</View>;
}
