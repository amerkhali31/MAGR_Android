// src/components/BackButton.tsx
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";

type BackButtonProps = {
  /** Optional text label next to the arrow */
  label?: string;
  /** Optional color for the arrow + text */
  color?: string;
  /** Optional custom style for the container */
  style?: ViewStyle;
  /** Optional text style */
  textStyle?: TextStyle;
  /** Whether to hide the text and only show the arrow */
  hideLabel?: boolean;
};

export default function BackButton({
  label = "Back",
  color = "#10B981", // default green
  style,
  textStyle,
  hideLabel = false,
}: BackButtonProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.back()}
      style={[
        { flexDirection: "row", alignItems: "center", paddingVertical: 4 },
        style,
      ]}
    >
      <Feather name="chevron-left" size={26} color={color} />
      {!hideLabel && (
        <Text style={[{ marginLeft: 6, fontSize: 16, color }, textStyle]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}
