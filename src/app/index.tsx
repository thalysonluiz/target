import { View } from "react-native";
import { HomeHeader } from "../components/HomeHeader";
import { Target } from "../components/Target";

const summary = {
  total: "R$ 2345,00",
  input: { label: "Entradas", value: "R$ 6,353.00" },
  output: { label: "Saídas", value: "R$ -808.00" }
};

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
      <Target data={{
        name: "Meta de Economia",
        percentage: "45%",
        current: "R$ 4,500.00",
        target: "R$ 10,000.00"
      }} />
    </View>
  );
}