import { List } from "@/components/List";
import { View } from "react-native";
import { HomeHeader } from "../components/HomeHeader";
import { Target } from "../components/Target";

const summary = {
  total: "R$ 2345,00",
  input: { label: "Entradas", value: "R$ 6,353.00" },
  output: { label: "Saídas", value: "R$ -808.00" }
};

const targets = [
  {
    id: '1',
    name: 'Apple Watch',
    percentage: '50%',
    current: 'R$ 580,00',
    target: 'R$ 1.790,00',
  },
  {
    id: '2',
    name: 'Comprar uma cadeira ergonômica',
    percentage: '75%',
    current: 'R$ 900,00',
    target: 'R$ 1.200,00',
  },
  {
    id: '3',
    name: 'Comprar uma cadeira ergonômica',
    percentage: '75%',
    current: 'R$ 1.200,00',
    target: 'R$ 3.000,00',
  },
]

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item} />}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}