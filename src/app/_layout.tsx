import { Stack } from "expo-router";

/*
Root Layout.
Defines stack navigator that wraos everything inside of app/
creates a stack navigation context at the root where the first screen in the stack is the entier tabs group, not just an individual screen.
so the whole tab navigator is nested inside a stack.
*/

// _layout.tsx files are where you define navigators like Tab and navigation stack
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      <Stack.Screen name="explore" />
    </Stack>
  );
}
