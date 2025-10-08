import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();

  // replace this with real auth later
  const handleFakeLogin = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text style={{ fontSize: 22 }}>Login</Text>
      <Pressable onPress={handleFakeLogin} style={{ padding: 12, borderRadius: 8, backgroundColor: "#1d63ea" }}>
        <Text style={{ color: "white", fontSize: 16 }}>Continue</Text>
      </Pressable>
    </View>
  );
}