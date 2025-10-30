import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { s } from "react-native-size-matters";

const productData = [
  {
    label: "Redmi Note 4",
    image: require("../assets/EcommItems/SmartWatch.png"),
  },
  {
    label: "AnalogWatch",
    image: require("../assets/EcommItems/AnalogWatch.png"),
  },
  {
    label: "squareWatch",
    image: require("../assets/EcommItems/SquareWatch.png"),
  },
  {
    label: "CasioClassic",
    image: require("../assets/EcommItems/CasioClassic.png"),
  },
];
const ProductCardList = () => {
  const [isSelectedMethod, setIsSelectedMethod] = useState("");
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={productData}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => (
        <ProductCard
          label={item.label}
          image={item.image}
          onPress={() =>
            setIsSelectedMethod(
              isSelectedMethod === item.label ? "" : item.label
            )
          }
          isSelected={isSelectedMethod === item.label}
        />
      )}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      scrollEnabled={false}
    ></FlatList>
  );
};

export default ProductCardList;

const styles = StyleSheet.create({
  container: {
    marginTop: s(32),
    flexDirection: "row",
  },
  contentContainer: {
    justifyContent: "space-between",
  },
});

// end of the beginnings
