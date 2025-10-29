import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const CategoryHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>Top Categories</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See All </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: s(25),
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: s(20),
    fontWeight: "700",
    color: "#000000",
  },
  seeAll: {
    fontSize: s(16),
    fontWeight: "500",
    color: "#F17547",
  },
});
