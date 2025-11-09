// src/screens/Prayer/index.tsx

import React from "react";
import { View } from "react-native";
import PrayerView from "./components/PrayerView";

export default function PrayerScreen() {

  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


          <PrayerView
            prayer={{name: "Fajr", adhan: "00:01", iqama:"00:02"}}
            iconName="sun"
            
          />


    </View>
  );
}
