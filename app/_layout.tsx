import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { loadProfile } from "../lib/profileStorage";

export default function RootLayout() {
  const [status, setStatus] = useState<"loading" | "guest" | "needsProfile" | "ready">("loading");

  useEffect(() => {
    const bootstrap = async () => {
      const isLogged = (await AsyncStorage.getItem("loggedIn")) === "true";
      if (!isLogged) return setStatus("guest");

      const p = await loadProfile();
      setStatus(p ? "ready" : "needsProfile");
    };
    bootstrap();
  }, []);

  if (status === "loading") {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#1d63ea" />
      </View>
    );
  }

  if (status === "guest") {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
      </Stack>
    );
  }

  if (status === "needsProfile") {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="create-profile" />
      </Stack>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="create-profile" />
    </Stack>
  );
}
