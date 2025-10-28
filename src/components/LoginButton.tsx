import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";

interface TheButtonProps {
  name: String;
}
const TheButton: FC<TheButtonProps> = ({ name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.LoginTxt}>{name}</Text>
    </TouchableOpacity>
  );
};

export default TheButton;

const styles = StyleSheet.create({
  container: {
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
