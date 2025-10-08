import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Login</Text>
      <Text style={{ fontSize: 16, color: "#666", textAlign: "center" }}>
        For now, this is a placeholder screen.  
        Tap below to continue to profile setup.
      </Text>

      <Pressable
        onPress={() => router.replace("/create-profile")}
        style={{
          backgroundColor: "#1d63ea",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Continue
        </Text>
      </Pressable>
    </View>
  );
}
