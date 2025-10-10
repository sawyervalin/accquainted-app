import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { loadProfile, type Profile } from "../lib/profileStorage";

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useFocusEffect(
    useCallback(() => {
      let mounted = true;
      loadProfile().then((p) => mounted && setProfile(p));
      return () => { mounted = false; };
    }, [])
  );

  return profile;
}
