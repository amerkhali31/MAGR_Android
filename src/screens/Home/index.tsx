// src/app/(tabs)/home/index.tsx
import HomeBox from "@/screens/Home/components/HomeBox";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

export default function HomeScreen() {
  return (
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
        <HomeBox
          Icon={<Feather name="sun" size={30} color="green" />}
          topText="Prayer Times"
          bottomText="View all daily prayers"
          onPress={() => console.log("Tapped HomeBox")}
        />
      </View>
  );
}
