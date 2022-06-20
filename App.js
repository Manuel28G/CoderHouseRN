import React from "react";
import Root from "./src";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("./assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("./assets/fonts/Lato-ThinItalic.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <Root />;
}
