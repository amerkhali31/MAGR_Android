// src/screens/NotificationToggle/index.tsx
import BackButton from "@/components/BackButton";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import NotificationView from "./components/NotificationView";

export default function NotificationSettingsScreen() {
  const { prayer } = useLocalSearchParams(); // ✅ get "prayer" from the URL query
  const [adhanEnabled, setAdhanEnabled] = useState(false);
  const [iqamaEnabled, setIqamaEnabled] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <BackButton color="blue" />
      <Text
        style={{
          fontSize: 22,
          fontWeight: "600",
          textAlign: "center",
          marginBottom: 20,
          color: "black",
        }}
      >
        {prayer} Notifications
      </Text>

      <NotificationView
        title="Adhan Alerts"
        description={`Enable or disable Adhan alerts for ${prayer}`}
        isSwitchOn={adhanEnabled}
        onValueChange={setAdhanEnabled}
      />

      <NotificationView
        title="Iqama Alerts"
        description={`Enable or disable Iqama alerts for ${prayer}`}
        isSwitchOn={iqamaEnabled}
        onValueChange={setIqamaEnabled}
      />
    </View>
  );
}