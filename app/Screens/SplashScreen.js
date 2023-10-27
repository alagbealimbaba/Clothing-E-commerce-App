import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require("../assets/SplashLogo.jpg")}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Image: {
    width: 104,
    height: 120,
  },
});
