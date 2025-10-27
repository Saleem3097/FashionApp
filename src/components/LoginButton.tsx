import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

const LoginButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.LoginTxt}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(52),
    height: s(55),
    width: s(317),
    backgroundColor: "#F83758",
    marginRight: s(10),
    alignSelf: "center", // 👈 centers horizontally
    justifyContent: "center", // centers text vertically
    alignItems: "center", // centers text horizontall
    borderRadius: s(4),
  },
  LoginTxt: {
    fontSize: s(20),
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
