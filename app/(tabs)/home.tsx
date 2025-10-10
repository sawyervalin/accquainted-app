import { Alert, Pressable, Text, View } from "react-native";
import { supabase } from "../../lib/supabase";

export default function Home() {
  const test = async () => {
    const { data, error } = await supabase.from("profiles").select("*").limit(1);
    if (error) Alert.alert("Supabase error", error.message);
    else Alert.alert("Supabase OK", `rows: ${data?.length ?? 0}`);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 24 }}>Home</Text>
      <Pressable onPress={test} style={{ backgroundColor: "#1d63ea", padding: 12, borderRadius: 8 }}>
        <Text style={{ color: "white" }}>Test Supabase</Text>
      </Pressable>
    </View>
  );
}
