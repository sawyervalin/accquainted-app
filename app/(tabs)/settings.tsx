// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";
// import { Alert, Linking, Pressable, Text, View } from "react-native";
// import { clearProfile } from "../../lib/profileStorage"; // ✅ clear profile storage

// const DEV_EMAIL = "officialsawyervalin@gmail.com";

// export default function Settings() {
//   const router = useRouter();

//   const handleLogout = async () => {
//     try {
//       // Clear both login flag and saved profile
//       await clearProfile();
//       await AsyncStorage.removeItem("loggedIn");
//       router.replace("/"); // Back to welcome screen
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   const contactDeveloper = async () => {
//     const subject = encodeURIComponent("Accquainted: Feedback / Support");
//     const body = encodeURIComponent(
//       "Hi Sawyer,\n\nI had a question/feedback about Accquainted:\n\n"
//     );
//     const url = `mailto:${DEV_EMAIL}?subject=${subject}&body=${body}`;

//     const supported = await Linking.canOpenURL(url);
//     if (supported) {
//       Linking.openURL(url);
//     } else {
//       Alert.alert(
//         "Email not available",
//         `Please email ${DEV_EMAIL} from your mail app.`
//       );
//     }
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         gap: 16,
//         backgroundColor: "white",
//         paddingHorizontal: 20,
//       }}
//     >
//       <Text style={{ fontSize: 22, fontWeight: "600" }}>Settings</Text>

//       <Pressable
//         onPress={contactDeveloper}
//         style={{
//           backgroundColor: "#1d63ea",
//           paddingVertical: 12,
//           paddingHorizontal: 24,
//           borderRadius: 8,
//           width: "100%",
//           maxWidth: 360,
//         }}
//       >
//         <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
//           Contact developer
//         </Text>
//       </Pressable>

//       <Pressable
//         onPress={handleLogout}
//         style={{
//           backgroundColor: "#d33",
//           paddingVertical: 12,
//           paddingHorizontal: 24,
//           borderRadius: 8,
//           width: "100%",
//           maxWidth: 360,
//         }}
//       >
//         <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
//           Log Out
//         </Text>
//       </Pressable>

//       <Text style={{ color: "#666", marginTop: 8 }}>
//         Or email: {DEV_EMAIL}
//       </Text>
//     </View>
//   );
// }

// SettingsScreen.tsx


import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const [campusVerified, setCampusVerified] = useState(true);
  const [newMatches, setNewMatches] = useState(true);
  const [newMessages, setNewMessages] = useState(true);
  const [newLikes, setNewLikes] = useState(false);

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView
        contentContainerStyle={s.scrollContent}
        showsVerticalScrollIndicator={false}
      >
      <View style={s.inner}>
        <LinearGradient
          colors={["#FF46B5", "#7B3EF3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={s.gradientTextWrap}
        >
          <Text style={s.gradientText}>settings</Text>
        </LinearGradient>
        <Ionicons name="person-outline" size={20} color="#3A2D46" />
      </View>

      {/* Account */}
      <Section title="Account">
        <SettingItem label="Email" value="j.doe@uci.edu" />
        <SettingItem label="Password" value="********" />
        <SettingItem label="Username" value="@jessica_d" />
      </Section>

      {/* Verification */}
      <Section title="Verification">
        <View style={s.toggleRow}>
          <View>
            <Text style={s.bold}>Campus Verified</Text>
            <Text style={s.subtext}>Show others you're a real UCI student.</Text>
          </View>
          <Switch
            value={campusVerified}
            onValueChange={setCampusVerified}
            trackColor={{ false: "#E6E0EB", true: "#FF46B5" }}
            thumbColor="#fff"
          />
        </View>
      </Section>

      {/* Subscription */}
      <Section title="Subscription">
        <LinearGradient
          colors={["#fff", "#fff"]}
          style={s.plusBox}
        >
          <View style={s.plusLeft}>
            <LinearGradient
              colors={["#FF46B5", "#7B3EF3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={s.plusGradientText}
            >
              <Text style={s.plusTitle}>Acquainted+</Text>
            </LinearGradient>
            <Text style={s.plusSubtitle}>
              Unlimited likes, see who likes you & more!
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.8} style={s.upgradeBtn}>
            <Text style={s.upgradeText}>Upgrade</Text>
          </TouchableOpacity>
        </LinearGradient>
      </Section>

      {/* Notifications */}
      <Section title="Notifications">
        <Toggle label="New Matches" value={newMatches} onChange={setNewMatches} />
        <Toggle label="New Messages" value={newMessages} onChange={setNewMessages} />
        <Toggle label="New Likes" value={newLikes} onChange={setNewLikes} />
      </Section>

      {/* Logout */}
      <TouchableOpacity activeOpacity={0.8} style={s.logout}>
        <Text style={s.logoutText}>Log Out</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* Helpers */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={s.section}>
      <Text style={s.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function SettingItem({ label, value }: { label: string; value: string }) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={s.settingItem}>
      <View>
        <Text style={s.settingLabel}>{label}</Text>
        <Text style={s.settingValue}>{value}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#C0B3C6" />
    </TouchableOpacity>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <View style={s.toggleRow}>
      <Text style={s.bold}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#E6E0EB", true: "#FF46B5" }}
        thumbColor="#fff"
      />
    </View>
  );
}

/* Styles */
const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  gradientTextWrap: {
    borderRadius: 6,
  },
  gradientText: {
    fontSize: 24,
    fontWeight: "800",
    color: "transparent",
    backgroundClip: "text",
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#8F829A",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  settingItem: {
    backgroundColor: "#F8F6FA",
    borderRadius: 14,
    paddingVertical: 17,
    paddingHorizontal: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  toggleRow: {
    backgroundColor: "#F8F6FA",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bold: { fontWeight: "600", color: "#3A2D46" },
  subtext: { color: "#8F829A", fontSize: 12, marginTop: 3 },
  plusBox: {
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: "#C445E8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    minHeight: 92,
    flexWrap: "wrap",        // <- prevents text from spilling
    rowGap: 10,              // RN >= 0.73
    columnGap: 12,
  },
  plusLeft: { flex: 1 },
  plusGradientText: {
    borderRadius: 4,
    paddingHorizontal: 4,
  },
  plusTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#FF46B5",
    marginBottom: 2,
  },
  upgradeBtn: {
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#C445E8",
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  upgradeText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#C445E8",
  },
  logout: {
    marginTop: 10,
    alignSelf: "center",
  },
  logoutText: {
    color: "#8F829A",
    fontWeight: "600",
    fontSize: 15,
  },
  settingValue: {
    fontWeight: "600",
    fontSize: 14,
    color: "#3A2D46",
    flexShrink: 1,           // <- allows text to wrap instead of overflow
  },
  settingLabel: {
    fontSize: 11,
    color: "#8F829A",
    fontWeight: "700",
    marginBottom: 2,
  },
  plusSubtitle: {
    fontSize: 13,
    color: "#8F829A",
    lineHeight: 25,
    flexShrink: 1,
  },

  
});
