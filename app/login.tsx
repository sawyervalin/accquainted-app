import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      // Simulate authentication delay
      await new Promise((res) => setTimeout(res, 1000));

      // Save a persistent flag for "logged in" state
      await AsyncStorage.setItem("loggedIn", "true");

      // Navigate into main app flow (e.g., profile setup or tabs)
      router.replace("/create-profile");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

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
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Dummy Login</Text>
      <Text style={{ fontSize: 16, color: "#666", textAlign: "center", marginHorizontal: 30 }}>
        This simulates logging in. Tap Continue to enter the app.
      </Text>

      <Pressable
        onPress={handleLogin}
        disabled={loading}
        style={{
          backgroundColor: loading ? "#7ca9ff" : "#1d63ea",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          {loading ? "Logging in..." : "Continue"}
        </Text>
      </Pressable>
    </View>
  );
}
