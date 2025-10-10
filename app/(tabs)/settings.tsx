import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Alert, Linking, Pressable, Text, View } from "react-native";
import { clearProfile } from "../../lib/profileStorage"; // ✅ clear profile storage

const DEV_EMAIL = "officialsawyervalin@gmail.com";

export default function Settings() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Clear both login flag and saved profile
      await clearProfile();
      await AsyncStorage.removeItem("loggedIn");
      router.replace("/"); // Back to welcome screen
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const contactDeveloper = async () => {
    const subject = encodeURIComponent("Accquainted: Feedback / Support");
    const body = encodeURIComponent(
      "Hi Sawyer,\n\nI had a question/feedback about Accquainted:\n\n"
    );
    const url = `mailto:${DEV_EMAIL}?subject=${subject}&body=${body}`;

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert(
        "Email not available",
        `Please email ${DEV_EMAIL} from your mail app.`
      );
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
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Settings</Text>

      <Pressable
        onPress={contactDeveloper}
        style={{
          backgroundColor: "#1d63ea",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          width: "100%",
          maxWidth: 360,
        }}
      >
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          Contact developer
        </Text>
      </Pressable>

      <Pressable
        onPress={handleLogout}
        style={{
          backgroundColor: "#d33",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          width: "100%",
          maxWidth: 360,
        }}
      >
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          Log Out
        </Text>
      </Pressable>

      <Text style={{ color: "#666", marginTop: 8 }}>
        Or email: {DEV_EMAIL}
      </Text>
    </View>
  );
}
