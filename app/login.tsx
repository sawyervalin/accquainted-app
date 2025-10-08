import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text style={{ fontSize: 22 }}>Login</Text>
      <Pressable
        onPress={() => router.replace("/create-profile")}
        style={{ backgroundColor: "#1d63ea", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Continue</Text>
      </Pressable>
    </View>
  );
}
