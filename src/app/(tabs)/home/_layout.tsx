// src/app/(tabs)/home/_layout.tsx

import { Stack } from "expo-router";
import AppStack from "../../../components/navigation/AppStack";

export default function HomeStack() {
  return (
    <AppStack>
      <Stack.Screen name="index"/>
      <Stack.Screen name="announcements" />
    </AppStack>
  );
}
