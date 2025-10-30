import { StyleSheet, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { Icon } from "../assets/Icon";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Icon />
    </View>
  );
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
