// src/components/navigation/AppStack.tsx
import { Stack } from "expo-router";
import React, { PropsWithChildren } from "react";

/**
 * A reusable Stack Navigator with shared defaults.
 * You can wrap <AppStack> around your screens in any layout.
 * Used to make screens transparent
 */
export default function AppStack({ children }: PropsWithChildren) {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      {children}
    </Stack>
  );
}
