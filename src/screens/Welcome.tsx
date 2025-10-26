import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconHome from "../../assets/Icon";
import { s, vs } from "react-native-size-matters";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <IconHome />
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
