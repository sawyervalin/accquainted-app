import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>Home</Text>
      <Text>Feed and matches will go here</Text>
    </View>
  );
}
