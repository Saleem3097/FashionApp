import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { s } from "react-native-size-matters";

const GreetName = () => {
  return (
    <View style={styles.container}>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello Fola</Text>
        <MaterialIcons
          style={{ position: "absolute", right: s(186), bottom: s(4) }}
          name="waving-hand"
          size={24}
          color="orange"
        />
      </View>
      <Text style={styles.helloTextDesc}>Let’s start shopping!</Text>
    </View>
  );
};

export default GreetName;

const styles = StyleSheet.create({
  container: {
    marginTop: s(20),
  },
  helloContainer: {
    flexDirection: "row",
    marginBottom: s(9),
    textAlign: "center",
    lineHeight: s(34),
    paddingBottom: s(2),
    alignItems: "flex-end",
  },
  helloText: {
    fontSize: s(26),
    fontWeight: "600",
    color: "#000000",
    includeFontPadding: false,
  },
  helloTextDesc: {
    fontSize: s(12),
    fontWeight: "600",
    color: "#00000080",
  },
});
