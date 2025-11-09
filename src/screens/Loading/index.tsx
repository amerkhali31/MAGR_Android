// src/screens/Loading/index.tsx

import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { DAILY_TIMES } from "../../constants/fb_constants";
import { db } from "../../firebaseConfig";

export default function TestFirestore() {
  const [data, setData] = useState<any>(null);

  const fetchPrayerTimes = async () => {
    try {
      const docRef = doc(
        db,
        DAILY_TIMES.COLLECTION,
        DAILY_TIMES.DOCUMENTS.DAILY_PRAYER_TIMES.NAME
      );

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const docData = docSnap.data();
        setData(docData);
      } else {
        console.log("❌ No such document found!");
      }
    } catch (error) {
      console.error("🔥 Firestore fetch error:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Fetch Prayer Times" onPress={fetchPrayerTimes} />
      {data && (
        <View style={{ marginTop: 20 }}>
          {Object.entries(data).map(([key, value]) => (
            <Text key={key}>{`${key}: ${value}`}</Text>
          ))}
        </View>
      )}
    </View>
  );
}
