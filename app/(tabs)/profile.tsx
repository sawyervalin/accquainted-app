import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useProfile } from "../../hooks/useProfile";
import { loadProfile, type Profile } from "../../lib/profileStorage";

export default function ProfileScreen() {
  const profileApi = useProfile(); // now inside the component
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const sub = setInterval(() => {
      loadProfile().then(setProfile);
    }, 300);
    return () => clearInterval(sub);
  }, []);

  if (!profile) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
        <Text style={{ fontSize: 18, color: "#666" }}>No profile yet</Text>
        <Link href="/create-profile" asChild>
          <Pressable style={{ backgroundColor: "#1d63ea", padding: 12, borderRadius: 8 }}>
            <Text style={{ color: "white" }}>Create Profile</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20, gap: 8, backgroundColor: "white" }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>{profile.name}</Text>
      <Text style={{ fontSize: 16, color: "#333" }}>{profile.bio}</Text>
      {!!profile.major && <Text style={{ fontSize: 16, color: "#555" }}>Major: {profile.major}</Text>}
      {!!profile.year && <Text style={{ fontSize: 16, color: "#555" }}>Year: {profile.year}</Text>}

      <Link href="/create-profile" asChild>
        <Pressable style={{ padding: 12, borderRadius: 8, marginTop: 16 }}>
          <Text style={{ color: "red", textAlign: "center" }}>Edit Profile</Text>
        </Pressable>
      </Link>
    </View>
  );
}
