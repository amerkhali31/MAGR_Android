// src/app/_layout.tsx
import { Stack } from "expo-router";
import BaseBackground from "../components/BaseBackground";


export default function RootLayout() {
  return (
      <BaseBackground logo={require("../../assets/images/logo.png")}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </BaseBackground>
  );
}
