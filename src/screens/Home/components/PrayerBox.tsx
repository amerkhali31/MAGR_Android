// components/PrayerBox.tsx
import React from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";

type Prayer = {
  name: string;
  iqama: string;
};

type PrayerBoxProps = {
  icon: ImageSourcePropType;
  mosqueImage: ImageSourcePropType;
  prayer: Prayer;
  countdownText?: string;
  onPress?: () => void;
};

export default function PrayerBox({ icon, mosqueImage, prayer, countdownText = "", onPress }: PrayerBoxProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={mosqueImage} style={styles.mosqueImage} resizeMode="cover" />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
          <Text style={styles.topLabel}>Next Prayer: {prayer.name}</Text>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.countdownLabel}>{countdownText}</Text>
          <Text style={styles.iqamaLabel}>{`${prayer.name} Iqama at ${prayer.iqama}`}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "black",
    height: 100,
    marginVertical: 10,
  },
  mosqueImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)", // subtle dark overlay to improve contrast
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "green",
    marginRight: 10,
  },
  topLabel: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  countdownLabel: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#00FF7F", // similar to your named "magr1"
  },
  iqamaLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
  },
  bottomSection: {
    alignItems: "flex-start",
  },
});
