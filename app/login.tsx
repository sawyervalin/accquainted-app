import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUpScreen() {

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
    <SafeAreaView style={s.safe}>
      <View style={s.container}>
        {/* Help icon */}
        <TouchableOpacity style={s.helpBtn} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
          <Text style={s.helpText}>?</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={s.title}>Create an account</Text>

        {/* Inputs */}
        <TextInput placeholder="UCI Email" placeholderTextColor="#8f7f8f" style={s.input} keyboardType="email-address" autoCapitalize="none" />
        <TextInput placeholder="Password" placeholderTextColor="#8f7f8f" style={s.input} secureTextEntry />
        <TextInput placeholder="Confirm Password" placeholderTextColor="#8f7f8f" style={s.input} secureTextEntry />

        {/* Primary button */}
        <Pressable
          onPress={handleLogin}
          disabled={loading}
          style={s.primaryBtn}
        >
          <Text style={s.primaryBtnText}>
            {loading ? "Logging in..." : "Create Account"}
          </Text>
        </Pressable>

         {/* Footer */}
        <TouchableOpacity style={s.footer}>
          <Text style={s.footerText}>
            Already have an account? <Text style={s.footerLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const PINK_BG = "#f6e9f0";      // light pink for inputs
const PINK_MAIN = "#ff3aa8";    // primary button
const TEXT_DARK = "#2b2230";
const TEXT_MUTED = "#8f7f8f";

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  helpBtn: {
    alignSelf: "flex-end",
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#f2f2f4",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  helpText: {
    color: TEXT_DARK,
    fontWeight: "700",
  },

  title: {
    marginTop: 8,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "800",
    color: TEXT_DARK,
    textAlign: "center",
    marginBottom: 18,
    paddingBottom: 100,  
  },

  input: {
    backgroundColor: PINK_BG,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: Platform.select({ ios: 16, android: 12 }),
    fontSize: 16,
    color: TEXT_DARK,
    marginBottom: 14,
  },

  primaryBtn: {
    backgroundColor: PINK_MAIN,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    ...(Platform.OS === "ios"
      ? { shadowColor: "#ff3aa8", shadowOpacity: 0.25, shadowRadius: 8, shadowOffset: { width: 0, height: 6 } }
      : { elevation: 2 }),
  },

  primaryBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  dividerText: {
    textAlign: "center",
    color: TEXT_MUTED,
    marginVertical: 16,
    fontSize: 13,
  },

  row: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
  },

  socialBtn: {
    flex: 1,
    maxWidth: 160,
    backgroundColor: PINK_BG,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  socialText: {
    color: TEXT_DARK,
    fontWeight: "700",
  },

  footer: {
    marginTop: "auto",
    alignSelf: "center",
    paddingVertical: 22,
  },

  footerText: {
    color: TEXT_MUTED,
  },

  footerLink: {
    color: PINK_MAIN,
    fontWeight: "700",
  },
});
