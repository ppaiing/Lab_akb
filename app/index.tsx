import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 50,
          borderRightWidth: 50,
          borderBottomWidth: 100,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "red",
          marginBottom: 20,
        }}
      />

      <View
        style={{
          width: 120,
          height: 50,
          backgroundColor: "blue",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>105841106522</Text>
      </View>

      <View
        style={{
          width: 200,
          height: 60,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
          A. Fachri
        </Text>
      </View>
    </View>
  );
}
