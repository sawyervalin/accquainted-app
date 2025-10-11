import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UciSignInScreen() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={s.safe} edges={["left", "right"]}>
      {/* Illustration */}
      <Image
        style={s.hero}
        resizeMode="cover"
        source={{
          uri: "https://i.postimg.cc/J73hL6JP/image.png",
        }}
      />

      {/* Content */}
      <View style={s.content}>
        <Text style={s.title}>Find your people at UCI</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={s.ctaWrap}
          onPress={() => router.push("/login")}
        >
          <LinearGradient
            colors={["#FF46B5", "#7B3EF3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={s.cta}
          >
            <Text style={s.ctaText}>Sign in with UCI Email</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={s.legal}>
          By continuing, you agree to our <Text style={s.link}>Terms of Service</Text> and{" "}
          <Text style={s.link}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  hero: {
    width: "130%",
    height: 500,
    borderRadius: 0,
  },
  content: {
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#2B2230",
    textAlign: "center",
    marginBottom: 28,
  },
  ctaWrap: {
    width: "85%",
    marginBottom: 25,
  },
  cta: {
    height: 52,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  legal: {
    textAlign: "center",
    color: "#A089B0",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
    paddingHorizontal: 25,
  },
  link: {
    color: "#C445E8",
    fontWeight: "700",
  },
});
