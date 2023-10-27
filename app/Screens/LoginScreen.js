import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DividerWithOr = () => (
  <View style={styles.dividerContainer}>
    <View style={styles.divider} />
    <Text style={styles.orText}>or</Text>
    <View style={styles.divider} />
  </View>
);

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          style={styles.logoImage}
          source={require("../assets/SplashLogo.jpg")}
        />
        <Text style={styles.loginText}>Log in</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.inputWrapper}>
          <View style={styles.iconBox}>
            <Icon
              name="envelope"
              size={20}
              color="#F67952"
              style={styles.icon}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.iconBox}>
            <Icon name="lock" size={20} color="#F67952" style={styles.icon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity style={[styles.section, styles.forgotSection]}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={[styles.section, styles.buttonSection]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <DividerWithOr />
      <View style={styles.socialIconsContainer}>
        <View style={styles.circularIconContainer}>
          <Image
            source={require("../assets/Facebook.jpg")}
            style={styles.socialIcon}
          />
        </View>
        <View style={styles.circularIconContainer}>
          <Image
            source={require("../assets/Google.jpg")}
            style={styles.socialIcon}
          />
        </View>
      </View>
      <View style={styles.SignUpContainer}>
        <Text style={styles.Account}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.SignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFD",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "100%",
    width: "100%",
    padding: 15,
    fontFamily: "gordita",
  },
  section: {
    marginBottom: 20,
  },
  logoImage: {
    width: 52,
    height: 60,
    marginBottom: 30,
  },
  loginText: {
    fontFamily: "gordita-bold",
    fontSize: 22,
    textAlign: "center",
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: 10,
    fontFamily: "gordita",
  },
  iconBox: {
    backgroundColor: "#F679521A",
    width: 48,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  icon: {
    alignSelf: "center",
  },
  forgotSection: {
    alignSelf: "flex-end",
  },
  forgot: {
    fontFamily: "gordita",
    textAlign: "right",
  },
  buttonSection: {
    alignItems: "center",
  },
  button: {
    width: 205,
    height: 59,
    borderRadius: 50,
    backgroundColor: "#F67952",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "gordita-bold",
    fontSize: 18,
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    justifyContent: "center",
    width: "80%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  orText: {
    marginHorizontal: 20,
    fontFamily: "gordita",
    color: "#333",
  },
  socialIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 60,
  },
  circularIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  SignUpContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    padding: 20,
    gap: 6,
  },
  SignUp: {
    fontFamily: "gordita",
    fontSize: 18,
  },
  Account: {
    fontFamily: "gordita",
    color: "lightgrey",
    fontSize: 18,
  },
});

export default LoginScreen;
