import { Stack } from "expo-router";

export default function SettingsStack() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Settings" }} />
    </Stack>
  );
}
