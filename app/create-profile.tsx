import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function CreateProfile() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text style={{ fontSize: 22 }}>Create Profile</Text>
      <Pressable
        onPress={() => router.replace("/(tabs)/home")}
        style={{ backgroundColor: "#1d63ea", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Save and continue</Text>
      </Pressable>
    </View>
  );
}
