import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Font from "expo-font";
import SplashScreen from "./app/Screens/SplashScreen";
import LoginScreen from "./app/Screens/LoginScreen";
import RegisterScreen from "./app/Screens/RegisterScreen";
import HomeScreen from "./app/Screens/HomeScreen";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
      gordita: require("./app/Fonts/Gorditas-Regular.ttf"),
      "gordita-bold": require("./app/Fonts/Gorditas-Bold.ttf"),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <SplashScreen /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "gordita",
  },
});
