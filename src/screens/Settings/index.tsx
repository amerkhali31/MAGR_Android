// src/screens/Settings/index.tsx
import { View } from "react-native";
import SettingsBox from "./components/SettingsBox";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <SettingsBox
        title="Notifications"
        description="Manage Adhan and Iqama alerts"
        onPress={() => console.log("Tapped Notifications")}
      />
      <SettingsBox
        title="Appearance"
        description="Customize theme and color scheme"
        onPress={() => console.log("Tapped Appearance")}
      />
    </View>
  );
}
