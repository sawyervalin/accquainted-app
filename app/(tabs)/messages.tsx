import { Text, View } from "react-native";

export default function Messages() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>Messages</Text>
      <Text>Your chats will appear here</Text>
    </View>
  );
}
