import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      {/* Segitiga Merah */}
      <View style={styles.triangle} />
      <Text style={styles.label}></Text>

      {/* Bentuk Pil dengan ID Siswa */}
      <View style={styles.pill}>
        <Text style={styles.pillText}>105841106522</Text>
      </View>
      <Text style={styles.label}></Text>

      {/* Persegi Panjang dengan Nama */}
      <View style={styles.rectangle}>
        <Text style={styles.nameText}>A. Fachri</Text>
      </View>
      <Text style={styles.label}></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    marginBottom: 5,
  },
  pill: {
    width: 140,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  pillText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  rectangle: {
    width: 200,
    height: 60,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  nameText: {
    fontSize: 19,
    color: "black",
    fontWeight: "bold",
  },
  label: {
    marginBottom: 10,
    fontSize: 14,
    color: "#444",
  },
});
