import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="test_screen" options={{ title: "Test Screen" }} />
    </Stack>
  );
}
