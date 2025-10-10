import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { loadProfile, saveProfile, type Profile } from "../lib/profileStorage";

export default function CreateProfile() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [isEditing, setIsEditing] = useState(false); // ✅ dynamic title & button
  const nameError = name.trim().length === 0 ? "Name is required" : "";
  const bioError = bio.trim().length === 0 ? "Bio is required" : "";

  useEffect(() => {
    loadProfile().then((p) => {
      const hasExisting =
        !!p &&
        ((p.name?.trim().length ?? 0) > 0 ||
          (p.bio?.trim().length ?? 0) > 0 ||
          !!p.major ||
          !!p.year ||
          !!p.photoUrl);

      setIsEditing(hasExisting);

      if (hasExisting) {
        setName(p!.name ?? "");
        setBio(p!.bio ?? "");
        setMajor(p!.major ?? "");
        setYear(p!.year ?? "");
      } else {
        // ensure fields are blank on first-time create
        setName("");
        setBio("");
        setMajor("");
        setYear("");
      }
    });
  }, []);

  const canSave = name.trim().length > 0 && bio.trim().length > 0;

  const onSave = async () => {
    const profile: Profile = {
      name: name.trim(),
      bio: bio.trim(),
      major: major.trim() || undefined,
      year: year.trim() || undefined,
    };
    await saveProfile(profile);
    router.replace("/(tabs)/profile");
  };

  const onCancel = () => router.back();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 30 : 16,
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "600" }}>
          {isEditing ? "Edit Profile" : "Create Profile"}
        </Text>

        {isEditing && (
          <Pressable onPress={onCancel}>
            <Text style={{ color: "#1d63ea", fontSize: 16 }}>Cancel</Text>
          </Pressable>
        )}
      </View>

      {/* Form */}
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 8, gap: 12 }}>
        <Text>Name</Text>
        {!!nameError && <Text style={{color:"#d33"}}>{nameError}</Text>}
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          autoCapitalize="words"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
          }}
        />
        <Text>Bio</Text>
        {!!bioError && <Text style={{color:"#d33"}}>{bioError}</Text>}
        <TextInput
          value={bio}
          onChangeText={setBio}
          placeholder="A short bio"
          multiline
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
            minHeight: 80,
            textAlignVertical: "top",
          }}
        />

        <Text>Major</Text>
        <TextInput
          value={major}
          onChangeText={setMajor}
          placeholder="Optional"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
          }}
        />

        <Text>Year</Text>
        <TextInput
          value={year}
          onChangeText={setYear}
          placeholder="e.g., Sophomore"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
          }}
        />

        <Pressable
          onPress={onSave}
          disabled={!canSave}
          style={{
            opacity: canSave ? 1 : 0.5,
            backgroundColor: "#1d63ea",
            padding: 12,
            borderRadius: 8,
            marginTop: 12,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
            {isEditing ? "Save Changes" : "Create Profile"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
