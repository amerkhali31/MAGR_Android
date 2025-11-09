// src/screens/Settings/components/SettingsBox.tsx
import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

type SettingsBoxProps = {
  title: string;
  description: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function SettingsBox({ title, description, onPress, style }: SettingsBoxProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        style,
        pressed && { opacity: 0.7, transform: [{ scale: 0.98 }] }, // subtle tap feedback
      ]}
      onPress={onPress}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    shadowColor: "#000",
    shadowOpacity: 1.0,
    shadowOffset: { width: -2, height: 2 },
    elevation: 4, // Android shadow
    marginVertical: 10,
    height: 60,
    justifyContent: "center",
  },
  inner: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "black",
    marginTop: 5,
  },
});
