import { ScrollView, Text, View, StyleSheet } from "react-native";

const data = [
  { name: "Andi Difta Ramaeyza Kaila", nim: "10584116022", font: "lato-bold", color: "blue" },
  { name: "Arsifah Ainun Auliah", nim: "1058411056122", font: "OpenSans_Condensed-Bold" },
  { name: "Tegar Surya Prayoga", nim: "105841106222", font: "poppins-bold" },
  { name: "Andi Angke Riona Megawan", nim: "105841106322", font: "spacemono-regular" },
  { name: "A.Fachri", nim: "105841106522", font: "Roboto_Condensed-Bold", color: "red" },
  { name: "Alizha Nur Arspandy", nim: "105841105722", font: "ibmplex-variable" },
  { name: "Yaumul Furqan", nim: "105841106822", font: "inter-variable" },
  { name: "Baso Hamzah", nim: "105841106922", font: "montserrat-variable" },
  { name: "Indah Nur Fauziah.A", nim: "105841107022", font: "raleway-variable" },
  { name: "Zalna Nur Islamiah", nim: "105841107122", font: "sora-variable", color: "blue" },
];

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={[styles.name, { fontFamily: item.font, color: item.color || "#000" }]}>
            {item.name}
          </Text>
          <Text style={[styles.nim, { fontFamily: item.font, color: item.color || "#000" }]}>
            {item.nim}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
  nim: {
    fontSize: 16,
    textAlign: "right",
  },
});
