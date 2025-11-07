import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Prayer = {
  name: string;
  iqama: string;
};

type PrayerBoxProps = {
  icon: React.ReactNode;
  mosqueImage: ImageSourcePropType;
  prayer: Prayer;
  countdownText?: string;
  onPress?: () => void;
};

export default function PrayerBox({
  icon,
  mosqueImage,
  prayer,
  countdownText = "",
  onPress,
}: PrayerBoxProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* 🟢 ImageBackground handles positioning automatically */}
      <ImageBackground
        source={mosqueImage}
        style={styles.imageBackground}
        imageStyle={styles.image} // controls how the image itself is drawn
        resizeMode="cover" // show entire image inside box
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.header}>
            {icon}
            <Text style={styles.topLabel}>Next Prayer: {prayer.name}</Text>
          </View>

          <View style={styles.bottomSection}>
            <Text style={styles.countdownLabel}>{countdownText}</Text>
            <Text style={styles.iqamaLabel}>
              {`${prayer.name} Iqama at ${prayer.iqama}`}
            </Text>
          </View>
        </View>
      </ImageBackground>
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
    height: 150,
    marginVertical: 10,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center", // centers content vertically
  },
  image: {
    opacity: 0.5,
    alignSelf: "center", // ✅ centers the actual image horizontally
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
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
  topLabel: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  countdownLabel: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#00FF7F",
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
