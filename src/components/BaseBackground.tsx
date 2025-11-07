// src/components/BaseBackground.tsx
import { LinearGradient } from "expo-linear-gradient";
import React, { PropsWithChildren } from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface BaseBackgroundProps {
  logo?: ImageSourcePropType;
  colors?: string[]; // make colors configurable
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const BaseBackground: React.FC<PropsWithChildren<BaseBackgroundProps>> = ({
  logo,
  colors=["#5BB45D", "#285931"],
  children,
}) => {
  return (
    <LinearGradient
      colors={colors as [string,string]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
        {/* Top Logo */}
        {logo && (
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
        )}
        {/* Content */}
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  safeArea: {
    flex: 1,
  },
  logo: {
    width: 120,
    height: 60,
    marginTop: 10,
    alignSelf: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "transparent", // ensures gradient shows through
  },
});

export default BaseBackground;
