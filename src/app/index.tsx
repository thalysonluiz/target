import { Text, View } from "react-native";
import { HomeHeader } from "../components/HomeHeader";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={{ total: "R$ 2345,00" }} />
      <Text>Hello, World!</Text>
    </View>
  );
}