import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

const MenuCard = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.menuHeader}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  menuHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {
    width: s(24),
    height: s(24),
    borderRadius: s(12),
  },
  search: {
    width: s(24),
    height: s(24),
    borderRadius: s(12),
  },
});
