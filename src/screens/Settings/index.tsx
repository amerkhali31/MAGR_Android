// src/screens/Settings/index.tsx
import { Prayer_Names } from "@/constants/prayers";
import { Text, View } from "react-native";
import SettingsBox from "./components/SettingsBox";

export default function SettingsScreen() {
  const prayer_names = [
    Prayer_Names.FAJR,
    Prayer_Names.DHUHR,
    Prayer_Names.ASR,
    Prayer_Names.MAGHRIB,
    Prayer_Names.ISHA,
    Prayer_Names.JUMAA
  ]

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Text
        style={{
          textAlign: "center",   // ← centers the text horizontally
          fontSize: 24,          // ← makes text larger
          color: "white",        // ← changes text color
          fontWeight: "600",     // optional: makes it semi-bold
        }}
      >
        Notification Preferences
      </Text>

      {prayer_names.map((name, index) => (
        <SettingsBox
          key={name}
          title={name}
          description={`Set notification preferences for ${name}`}
          onPress={() => console.log("Tapped Notifications")}
        />
      ))}      
      
      <SettingsBox
        title="Membership renewal"
        description="Set notification preferences for Membership Renewals"
        onPress={() => console.log("Tapped Appearance")}
      />
    </View>
  );
}
