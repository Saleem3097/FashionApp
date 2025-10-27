import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";

const Welcome = () => {
  return <View style={styles.container}></View>;
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    height: vs(100),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: s(356),
  },
});
