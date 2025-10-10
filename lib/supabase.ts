import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

// Works in Expo Go (expoConfig), classic manifests, and with EXPO_PUBLIC_* envs
const extra =
  (Constants?.expoConfig?.extra as any) ??
  (Constants as any)?.manifest?.extra ??
  {};

const url =
  extra?.EXPO_PUBLIC_SUPABASE_URL ?? process.env.EXPO_PUBLIC_SUPABASE_URL;
const anon =
  extra?.EXPO_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anon) {
  console.warn(
    "[supabase] Missing URL or ANON key. Check app.json -> expo.extra or EXPO_PUBLIC_* envs."
  );
}

export const supabase = createClient(url!, anon!);
