// src/components/HomeBox.tsx
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type HomeBoxProps = {
  Icon: React.ReactNode; // instead of requiring an image file
  topText: string;
  bottomText: string;
  onPress?: () => void;
};

export default function HomeBox({ Icon, topText, bottomText, onPress }: HomeBoxProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {Icon}
      <View style={styles.textContainer}>
        <Text style={styles.topLabel}>{topText}</Text>
        <Text style={styles.bottomLabel}>{bottomText}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
container: {
  backgroundColor: "black",
  borderRadius: 20,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 15,
  height: 95,
  marginVertical: 10,
},
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  topLabel: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  bottomLabel: {
    fontSize: 14,
    color: "lightgray",
  },
});
