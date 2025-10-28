import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuCard from "../components/MenuCard";
import { s } from "react-native-size-matters";
import GreetName from "../components/GreetName";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <MenuCard />
      <GreetName />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: { marginTop: s(60) },
});
