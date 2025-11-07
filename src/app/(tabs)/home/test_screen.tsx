import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Test Screen (inside Home stack)</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
