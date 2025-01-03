import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import GlobalProvider from "@/context/GlobalProvider";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins_Black: require("../assets/fonts/Poppins-Black.ttf"),
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_ExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    Poppins_ExtraLight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    Poppins_Light: require("../assets/fonts/Poppins-Light.ttf"),
    Poppins_Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_Thin: require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GlobalProvider>
  );
}
