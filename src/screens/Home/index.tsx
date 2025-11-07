// src/app/(tabs)/home/index.tsx
import HomeBox from "@/screens/Home/components/HomeBox";
import { Feather } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PrayerBox from "./components/PrayerBox";

export default function HomeScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
        paddingBottom: tabBarHeight + insets.bottom, // <- reserve real space for tab bar
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 0,
          paddingBottom: 40, // normal padding inside the scroll
        }}
        showsVerticalScrollIndicator={true}
      >
        <View style={{ gap: 0 }}>

          <PrayerBox
            icon={<Feather name="sun" size={30} color="green" />}
            mosqueImage={require("../../../assets/images/mosque.png")}
            prayer={{ name: "Maghrib", iqama: "6:30 PM" }}
            countdownText="00:14:22"
            onPress={() => console.log("Tapped PrayerBox")}
          />

          <HomeBox
            Icon={<Feather name="bell" size={30} color="#00FF7F" />}
            topText="Announcements"
            bottomText="Stay up to date with MAGR news"
            onPress={() => console.log("Tapped Prayer Times")}
          />
          <HomeBox
            Icon={<Feather name="book-open" size={30} color="#00FF7F" />}
            topText="Hadith of the Day"
            bottomText="Reflect on the wisdom of Hadith"
            onPress={() => console.log("Tapped Notifications")}
          />
          <HomeBox
            Icon={<Feather name="phone" size={30} color="#00FF7F" />}
            topText="Contact Us"
            bottomText="Find all of our contact information"
            onPress={() => console.log("Tapped Community")}
          />
          <HomeBox
            Icon={<Feather name="dollar-sign" size={30} color="#00FF7F" />}
            topText="Donate"
            bottomText="Increase in charity"
            onPress={() => console.log("Tapped Mosque Locator")}
          />
          <HomeBox
            Icon={<Feather name="message-square" size={30} color="#00FF7F" />}
            topText="Feedback"
            bottomText="Tell us how to improve"
            onPress={() => console.log("Tapped Notifications")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
