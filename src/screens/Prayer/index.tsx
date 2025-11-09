// src/screens/Prayer/index.tsx
import { Daily_Prayer_Names_list, Prayer_Names } from "@/constants/prayers";
import React from "react";
import { Text, View } from "react-native";
import PrayerView from "./components/PrayerView";

export default function PrayerScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 20, width: "100%" }}>
      {/* ✅ Header Row */}
      <View
        style={{
          position: "relative", // allows centered text
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 15,
          marginBottom: 8,
        }}
      >
        {/* Left column label (same as prayerLabel position) */}
        <Text style={{ flex: 1, color: "white", fontWeight: "600", fontSize: 16 }}>
          Date
        </Text>

        {/* ✅ Centered Adhan text */}
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>Adhan</Text>
        </View>

        {/* Right side label (same as iqamaLabel position) */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>Iqama</Text>
        </View>
      </View>

      {/* ✅ Daily Prayers */}
      {Daily_Prayer_Names_list.map((name) => (
        <PrayerView
          key={name}
          prayer={{ name: name, adhan: "00:01", iqama: "00:02" }}
          iconName="sun"
        />
      ))}

      {/* Spacer */}
      <View style={{ height: 20 }} />

      {/* ✅ Jumaa Section */}
      <PrayerView
        key={"Khutba"}
        prayer={{ name: Prayer_Names.JUMAA, adhan: "Khutba", iqama: "00:02" }}
        iconName="sun"
      />
      <PrayerView
        key={"Salah"}
        prayer={{ name: Prayer_Names.JUMAA, adhan: "Salah", iqama: "00:02" }}
        iconName="sun"
      />
    </View>
  );
}
