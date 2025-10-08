import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useAuth() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem("loggedIn").then(v => setLoggedIn(v === "true"));
  }, []);

  const login = async () => {
    await AsyncStorage.setItem("loggedIn", "true");
    setLoggedIn(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return { loggedIn, login, logout };
}
