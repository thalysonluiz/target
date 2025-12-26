import { Text, View } from "react-native";
import { HomeHeader } from "../components/HomeHeader";

const summary = {
  total: "R$ 2345,00",
  input: { label: "Entradas", value: "R$ 6,353.00" },
  output: { label: "Saídas", value: "R$ -808.00" }
};

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
      <Text>Hello, World!</Text>
    </View>
  );
}