// src/app/(tabs)/home/announcements.tsx
import BackButton from "@/components/BackButton";
import { Text, View } from "react-native";

export default function Announcements() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <BackButton color="blue" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Announcements Page</Text>
      </View>
    </View>
  );
}
