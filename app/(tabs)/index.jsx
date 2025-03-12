import { Text, View } from "react-native";
import Profile from "./profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Profile/>
      <Text>Get Started</Text>
    </View>
  );
}
