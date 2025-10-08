import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text style={{ fontSize: 24 }}>Welcome to Accquainted</Text>

      <Pressable style={{ padding: 12, borderRadius: 8, backgroundColor: "#1d63ea" }}>
        <Link href="/login" style={{ color: "white", fontSize: 16 }}>
          Sign in with UCI email
        </Link>
      </Pressable>
    </View>
  );
}
