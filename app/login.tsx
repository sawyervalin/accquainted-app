import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text style={{ fontSize: 24 }}>Welcome to Accquainted</Text>

      <Pressable
        onPress={() => router.push("/login")}
        style={{ padding: 12, borderRadius: 8, backgroundColor: "#1d63ea" }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Sign in with UCI email</Text>
      </Pressable>
    </View>
  );
}
