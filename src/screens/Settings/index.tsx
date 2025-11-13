// src/screens/Settings/index.tsx
import { Daily_Prayer_Names_list } from "@/constants/prayers";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import SettingsBox from "./components/SettingsBox";

export default function SettingsScreen() {
  const router = useRouter();
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

      {Daily_Prayer_Names_list.map((name, index) => (
        <SettingsBox
          key={name}
          title={name}
          description={`Set notification preferences for ${name}`}
          onPress={() => router.push(`/(tabs)/settings/notificationsettings?prayer=${name}`)}
        />
      ))}

      <SettingsBox
        title="Jumaa"
        description="Set notification preferences for Jumaa"
        onPress={() => console.log("Tapped Appearance")}
      />
      
      <SettingsBox
        title="Membership renewal"
        description="Set notification preferences for Membership Renewals"
        onPress={() => console.log("Tapped Appearance")}
      />
    </View>
  );
}
