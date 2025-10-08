import { Pressable, Text } from "react-native";

export function AppButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={{ padding: 12, borderRadius: 8, backgroundColor: "#1d63ea" }}>
      <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>{title}</Text>
    </Pressable>
  );
}
