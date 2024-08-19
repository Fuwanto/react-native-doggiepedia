import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./components/Main";
import { styled } from "nativewind";

const StyledView = styled(View);

export default function App() {
  return (
    <SafeAreaProvider>
      <StyledView className="flex-1 bg-black">
        <StatusBar style="auto" />
        <Main />
      </StyledView>
    </SafeAreaProvider>
  );
}
