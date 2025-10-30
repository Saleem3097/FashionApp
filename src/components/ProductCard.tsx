import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.offerHeartContainer}>
        <Text style={styles.offerText}>50% OFF</Text>
        <TouchableOpacity style={styles.heartContainer}>
          <Entypo
            name="heart"
            size={20}
            color="#CFCFCF"
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <Image
          source={require("../assets/EcommItems/SmartWatch.png")}
          style={{
            resizeMode: "contain",
            width: s(160),
            height: s(99),
            right: s(30),
          }}
        />
      </View>
      <Text style={styles.productName}>Redmi Note 4</Text>
      <View style={styles.amountContainer}>
        <Text>₹ 45,000</Text>
        <Text>₹ 55,000</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(130),
    height: s(180),
    borderRadius: s(15),
    backgroundColor: "#F8F8F8",
  },
  offerHeartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: s(16),
    paddingTop: s(4),
  },
  offerText: {
    height: s(23),
    width: s(55),
    backgroundColor: "#FFFFFF",
    borderRadius: s(12),
  },
  heartContainer: {
    width: s(24),
    height: s(24),
    borderRadius: s(11),
    borderColor: "#CFCFCF",
    borderWidth: s(1.45),
    justifyContent: "center",
    alignContent: "center",
  },
  productName: {
    fontSize: s(14),
    color: "#000000BF",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
