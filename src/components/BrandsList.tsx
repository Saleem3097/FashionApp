import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BrandCard from "./BrandCard";
import { s } from "react-native-size-matters";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const brandData = [
  {
    label: "Watch",
    icon: (
      <MaterialCommunityIcons
        name="watch-variant"
        size={24}
        color="#00000066"
      />
    ),
  },
  {
    label: "Bag",
    icon: (
      <MaterialCommunityIcons name="bag-personal" size={24} color="#00000066" />
    ),
  },
  {
    label: "Shoes",
    icon: (
      <MaterialCommunityIcons name="shoe-formal" size={24} color="#00000066" />
    ),
  },
  {
    label: "Camera",
    icon: <MaterialCommunityIcons name="camera" size={24} color="#00000066" />,
  },
  {
    label: "Perfume",
    icon: (
      <MaterialCommunityIcons name="bottle-tonic" size={24} color="#00000066" />
    ),
  },
];

const BrandsList = () => {
  const [selected, setIsSelected] = useState("");
  return (
    <FlatList
      style={styles.container}
      data={brandData}
      renderItem={({ item }) => (
        <BrandCard
          label={item.label}
          icon={item.icon}
          onPress={() => setIsSelected(item.label)}
          isSelected={selected === item.label}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default BrandsList;

const styles = StyleSheet.create({
  container: {
    marginTop: s(32),
    flexDirection: "row",
  },
});
