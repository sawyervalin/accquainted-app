// import { useRouter } from "expo-router";
// import { useEffect, useState } from "react";
// import {
//   Platform,
//   Pressable,
//   SafeAreaView,
//   StatusBar,
//   Text,
//   TextInput,
//   View,
// } from "react-native";
// import { loadProfile, saveProfile, type Profile } from "../lib/profileStorage";

// export default function CreateProfile() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [bio, setBio] = useState("");
//   const [major, setMajor] = useState("");
//   const [year, setYear] = useState("");
//   const [isEditing, setIsEditing] = useState(false); // ✅ dynamic title & button
//   const nameError = name.trim().length === 0 ? "Name is required" : "";
//   const bioError = bio.trim().length === 0 ? "Bio is required" : "";

//   useEffect(() => {
//     loadProfile().then((p) => {
//       const hasExisting =
//         !!p &&
//         ((p.name?.trim().length ?? 0) > 0 ||
//           (p.bio?.trim().length ?? 0) > 0 ||
//           !!p.major ||
//           !!p.year ||
//           !!p.photoUrl);

//       setIsEditing(hasExisting);

//       if (hasExisting) {
//         setName(p!.name ?? "");
//         setBio(p!.bio ?? "");
//         setMajor(p!.major ?? "");
//         setYear(p!.year ?? "");
//       } else {
//         // ensure fields are blank on first-time create
//         setName("");
//         setBio("");
//         setMajor("");
//         setYear("");
//       }
//     });
//   }, []);

//   const canSave = name.trim().length > 0 && bio.trim().length > 0;

//   const onSave = async () => {
//     const profile: Profile = {
//       name: name.trim(),
//       bio: bio.trim(),
//       major: major.trim() || undefined,
//       year: year.trim() || undefined,
//     };
//     await saveProfile(profile);
//     router.replace("/(tabs)/profile");
//   };

//   const onCancel = () => router.back();

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: "white",
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 30 : 16,
//       }}
//     >
//       {/* Header */}
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           paddingHorizontal: 16,
//           marginBottom: 10,
//         }}
//       >
//         <Text style={{ fontSize: 22, fontWeight: "600" }}>
//           {isEditing ? "Edit Profile" : "Create Profile"}
//         </Text>

//         {isEditing && (
//           <Pressable onPress={onCancel}>
//             <Text style={{ color: "#1d63ea", fontSize: 16 }}>Cancel</Text>
//           </Pressable>
//         )}
//       </View>

//       {/* Form */}
//       <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 8, gap: 12 }}>
//         <Text>Name</Text>
//         {!!nameError && <Text style={{color:"#d33"}}>{nameError}</Text>}
//         <TextInput
//           value={name}
//           onChangeText={setName}
//           placeholder="Your name"
//           autoCapitalize="words"
//           style={{
//             borderWidth: 1,
//             borderColor: "#ccc",
//             borderRadius: 8,
//             padding: 10,
//           }}
//         />
//         <Text>Bio</Text>
//         {!!bioError && <Text style={{color:"#d33"}}>{bioError}</Text>}
//         <TextInput
//           value={bio}
//           onChangeText={setBio}
//           placeholder="A short bio"
//           multiline
//           style={{
//             borderWidth: 1,
//             borderColor: "#ccc",
//             borderRadius: 8,
//             padding: 10,
//             minHeight: 80,
//             textAlignVertical: "top",
//           }}
//         />

//         <Text>Major</Text>
//         <TextInput
//           value={major}
//           onChangeText={setMajor}
//           placeholder="Optional"
//           style={{
//             borderWidth: 1,
//             borderColor: "#ccc",
//             borderRadius: 8,
//             padding: 10,
//           }}
//         />

//         <Text>Year</Text>
//         <TextInput
//           value={year}
//           onChangeText={setYear}
//           placeholder="e.g., Sophomore"
//           style={{
//             borderWidth: 1,
//             borderColor: "#ccc",
//             borderRadius: 8,
//             padding: 10,
//           }}
//         />

//         <Pressable
//           onPress={onSave}
//           disabled={!canSave}
//           style={{
//             opacity: canSave ? 1 : 0.5,
//             backgroundColor: "#1d63ea",
//             padding: 12,
//             borderRadius: 8,
//             marginTop: 12,
//           }}
//         >
//           <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
//             {isEditing ? "Save Changes" : "Create Profile"}
//           </Text>
//         </Pressable>
//       </View>
//     </SafeAreaView>
//   );
// }

// // SignUpScreen.tsx

// ProfileBasicsScreen.tsx

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Option = { id: string; label: string; icon?: string; gradient?: boolean };

export default function ProfileBasicsScreen() {
  const router = useRouter();
  
  const [interestSel, setInterestSel] = useState<string[]>(["art", "gaming", "music", "travel", "movies", "foodie", "fitness"]);
  const [school, setSchool] = useState("Engineering");
  const [religion, setReligion] = useState("Spiritual");
  const [gender, setGender] = useState("Woman");
  const [pronouns, setPronouns] = useState("she/her");
  const [sexualitySel, setSexualitySel] = useState<string[]>(["gay"]);
  const [lookingSel, setLookingSel] = useState<string[]>(["longterm"]);
  const [selectedValue, setSelectedValue] = useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const interests: Option[] = [
    { id: "art", label: "Art", icon: "🎨", gradient: true },
    { id: "gaming", label: "Gaming", icon: "🎮", gradient: true },
    { id: "music", label: "Music", icon: "🎵", gradient: true },
    { id: "travel", label: "Travel", icon: "✈️", gradient: true },
    { id: "movies", label: "Movies", icon: "🎬", gradient: true },
    { id: "foodie", label: "Foodie", icon: "🍜", gradient: true },
    { id: "fitness", label: "Fitness", icon: "💪", gradient: true },
  ];

  const sexuality: Option[] = [
    { id: "straight", label: "Straight", gradient: true },
    { id: "gay", label: "Gay", gradient: true },
    { id: "lesbian", label: "Lesbian", gradient: true },
    { id: "bi", label: "Bisexual", gradient: true },
    { id: "ace", label: "Asexual", gradient: true },
    { id: "pan", label: "Pansexual", gradient: true },
  ];

  const looking: Option[] = [
    { id: "longterm", label: "Long-term", gradient: true },
    { id: "shortterm", label: "Short-term", gradient: true },
    { id: "friendship", label: "Friendship", gradient: true },
    { id: "figuring", label: "Figuring it out", gradient: true },
  ];

  const toggle = (setFn: React.Dispatch<React.SetStateAction<string[]>>, value: string) =>
    setFn((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));

  


  // Add handleContinue function
  const handleContinue = () => {
    // You can add navigation or save logic here
    router.push("/(tabs)/profile");
  };

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.container}>
        

        <Text style={s.title}>Tell Us About You</Text>
        <Text style={s.subtitle}>
          Select what best describes you. This helps us find your perfect match!
        </Text>

        {/* Interests */}
        <Section title="Interests" icon="🧩">
          <View style={s.wrapRow}>
            {interests.map((o) => {
              const on = interestSel.includes(o.id);
              return (
                <Chip
                  key={o.id}
                  label={`${o.icon ? `${o.icon} ` : ""}${o.label}`}
                  on={on}
                  gradient={o.gradient}
                  onPress={() => toggle(setInterestSel, o.id)}
                />
              );
            })}
          </View>
        </Section>

        {/* Basics */}
        <Section title="My Basics" icon="📋">
          <View style={s.gridWrapper}>
            <View style={s.grid2}>
            <DropDownPicker
                style={s.picker}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>

            <View style={s.grid2}>
              <DropDownPicker
                style={s.picker}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>

          </View>
          
        </Section>

        {/* Sexuality */}
        <Section title="Sexuality" icon="⚧️">
          <View style={s.wrapRow}>
            {sexuality.map((o) => {
              const on = sexualitySel.includes(o.id);
              return (
                <Chip
                  key={o.id}
                  label={o.label}
                  on={on}
                  gradient={o.gradient}
                  onPress={() => toggle(setSexualitySel, o.id)}
                />
              );
            })}
          </View>
        </Section>

        {/* Looking for */}
        <Section title="I'm looking for..." icon="❤️">
          <View style={s.wrapRow}>
            {looking.map((o) => {
              const on = lookingSel.includes(o.id);
              return (
                <Chip
                  key={o.id}
                  label={o.label}
                  on={on}
                  gradient={o.gradient}
                  onPress={() => toggle(setLookingSel, o.id)}
                />
              );
            })}
          </View>
        </Section>

        {/* CTA */}
        <TouchableOpacity activeOpacity={0.9} style={s.ctaWrap} onPress={handleContinue}>
          <LinearGradient
            colors={["#FF46B5", "#7B3EF3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={s.cta}
          >
            <Text style={s.ctaText}>Save & Continue</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* Helpers */

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <View style={s.section}>
      <View style={s.sectionHead}>
        <Text style={s.sectionIcon}>{icon}</Text>
        <Text style={s.sectionTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

function Chip({
  label,
  on,
  gradient,
  onPress,
}: {
  label: string;
  on?: boolean;
  gradient?: boolean;
  onPress?: () => void;
}) {
  const base = (
    <View
      style={[
        s.chip,
        { backgroundColor: on ? "#3A2D46" : "#EFE7F5", borderColor: on ? "transparent" : "transparent" },
      ]}
    >
      <Text style={[s.chipText, { color: on ? "#fff" : "#3A2D46" }]}>{label}</Text>
    </View>
  );

  if (on && gradient) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <LinearGradient
          colors={["#FF46B5", "#7B3EF3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={s.chipGrad}
        >
          <Text style={[s.chipText, { color: "#fff" }]}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      {base}
    </TouchableOpacity>
  );
}

function SelectField({
  label,
  value,
  onPress,
}: {
  label: string;
  value: string;
  onPress: () => void;
}) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={s.selectLabel}>{label}</Text>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={s.select}>
        <Text style={s.selectValue}>{value}</Text>
        <Text style={s.selectChevron}>⌄</Text>
      </TouchableOpacity>
    </View>
  );
}


/* Styles */
const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },

  container: { paddingHorizontal: 16, paddingTop: 8 },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    color: "#FF2FA6",
    marginBottom: 8,
    paddingTop: 10,
    paddingBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 13,
    color: "#8F829A",
    marginBottom: 26,
    paddingHorizontal: 8,
  },
  
  section: { marginBottom: 25 },

  sectionHead: { flexDirection: "row", alignItems: "center", marginBottom: 10 },

  sectionIcon: { fontSize: 16, marginRight: 8, marginBottom: 10 },

  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#3A2D46",  marginBottom: 10 },

  wrapRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 0,
    marginBottom: 10,
  },

  chipGrad: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 10,
  },
  
  chipText: { fontWeight: "700", fontSize: 13 },

  grid2: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    width: 150,
  },

  selectLabel: {
    fontSize: 12,
    color: "#8F829A",
    marginBottom: 6,
    marginLeft: 4,
  },

  select: {
    width: 160,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6E0EB",
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectValue: { color: "#3A2D46", fontWeight: "600" },

  selectChevron: { color: "#8F829A", fontSize: 16 },

  ctaWrap: { marginTop: 8 },

  cta: {
    height: 52,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  ctaText: { color: "#fff", fontWeight: "800", fontSize: 16 },

  picker: {
    width: 150,
    borderColor: '#E6E0EB',
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },

  gridWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  }
});
