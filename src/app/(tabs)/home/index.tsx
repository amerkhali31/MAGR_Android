// src/app/(tabs)/home/index.tsx
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Tab</Text>
      <Button title="Go to Test Screen" onPress={() => router.push("/(tabs)/home/test_screen")} />
    </View>
  );
}
