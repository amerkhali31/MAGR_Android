// src/components/NotificationView.tsx
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View, ViewStyle } from "react-native";

type NotificationViewProps = {
  title?: string;
  description?: string;
  isSwitchOn?: boolean;
  onValueChange?: (value: boolean) => void;
  style?: ViewStyle;
};

export default function NotificationView({
  title = "",
  description = "",
  isSwitchOn = false,
  onValueChange,
  style,
}: NotificationViewProps) {
  const [isEnabled, setIsEnabled] = useState(isSwitchOn);

  const toggleSwitch = (value: boolean) => {
    setIsEnabled(value);
    onValueChange?.(value);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        thumbColor={isEnabled ? "#5BB45D" : "#f4f3f4"}
        trackColor={{ false: "#767577", true: "#285931" }}
        ios_backgroundColor="#767577"
        style={styles.switch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: -2, height: 2 },
    elevation: 2, // Android shadow
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
    marginBottom: 10,
  },
  switch: {
    transform: [{ scale: 1.2 }],
  },
});
