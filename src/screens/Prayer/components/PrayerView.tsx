// src/components/PrayerView.tsx
import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

type DailyPrayer = {
  name: string;
  adhan: string;
  iqama: string;
};

type PrayerViewProps = {
  prayer: DailyPrayer;
  iconName: keyof typeof Feather.glyphMap; // e.g. "sun", "moon", etc.
  showAlarm?: boolean; // corresponds to "show" in Swift
  isJumaa?: boolean;   // corresponds to "jumaa"
  initialStatus?: boolean;
  onPress?: () => void; // for general box press
};

export default function PrayerView({
  prayer,
  iconName,
  showAlarm = true,
  isJumaa = false,
  initialStatus = false,
  onPress,
}: PrayerViewProps) {
  const [status, setStatus] = useState(initialStatus);

  const handleToggleAlarm = () => {
    const newStatus = !status;
    setStatus(newStatus);

    const statusText = newStatus ? "Turned On" : "Turned Off";
    Alert.alert("Adhan Notification", `The alarm for ${prayer.name} has been ${statusText}.`);
  };

  // Handle what texts show up depending on `jumaa`
  const prayerLabel = isJumaa ? "Jumaa" : prayer.name;
  const adhanLabel = isJumaa ? prayer.name.replace("Jumaa ", "") : prayer.adhan;
  const iqamaLabel = prayer.iqama;

  return (
<Pressable style={styles.container} onPress={onPress}>
  <Feather name={iconName} size={30} color="white" style={styles.icon} />

  <Text style={[styles.text, styles.prayerLabel]}>{prayerLabel}</Text>

  {/* ✅ Centered adhan label */}
  <View style={styles.centerAbsolute}>
    <Text style={styles.text}>{adhanLabel}</Text>
  </View>

  <View style={styles.rightGroup}>
    <Text style={styles.text}>{iqamaLabel}</Text>
    {showAlarm && (
        <Ionicons
          name="alarm-outline"
          size={20}
          color={status ? "white" : "gray"}
          style={{ marginLeft: 8 }}
        />
    )}
  </View>
</Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    height: 60,
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  prayerLabel: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
  },
    centerAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  rightGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
});
