import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

const WelcomeText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
    </View>
  );
};

export default WelcomeText;

const styles = StyleSheet.create({
  container: {
    marginTop: s(40),
    width: s(185),
    height: vs(83),
    left: s(32),
    marginBottom: s(15),
  },
  welcomeText: {
    fontSize: s(36),
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#000000",
  },
});
