import AsyncStorage from "@react-native-async-storage/async-storage";

const PROFILE_KEY = "profile";

export type Profile = {
  name: string;
  bio: string;
  major?: string;
  year?: string;
  photoUrl?: string;
};

export async function saveProfile(p: Profile) {
  await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(p));
}

export async function loadProfile(): Promise<Profile | null> {
  const raw = await AsyncStorage.getItem(PROFILE_KEY);
  return raw ? (JSON.parse(raw) as Profile) : null;
}

export async function clearProfile() {
  await AsyncStorage.removeItem(PROFILE_KEY);
}

