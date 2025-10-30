import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

interface ProductCardProps {
  label?: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  isSelected?: boolean;
}
const ProductCard: FC<ProductCardProps> = ({
  label,
  image,
  onPress,
  isSelected,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.offerHeartContainer}>
        <Text style={styles.offerText}>50% OFF</Text>
        <TouchableOpacity
          style={
            styles.heartContainer && isSelected && { borderColor: "#fe0707ff" }
          }
          onPress={onPress}
        >
          <Entypo
            name="heart"
            size={20}
            style={[styles.heart, isSelected && { color: "red" }]}
          />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <Image source={image} style={styles.productContainer} />
      </View>
      <Text style={styles.productName}>{label}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.offerPrice}>₹ 45,000</Text>
        <Text style={styles.mrpPrice}>₹ 55,000</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(150),
    height: s(180),
    borderRadius: s(15),
    backgroundColor: "#F8F8F8",
    margin: s(6),
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
  heart: {
    textAlign: "center",
    color: "#CFCFCF",
  },
  productContainer: {
    resizeMode: "contain",
    width: s(160),
    height: s(99),
    right: s(25),
  },
  productName: {
    fontSize: s(14),
    color: "#000000BF",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  offerPrice: {
    color: "#000000",
    fontSize: s(12),
    fontWeight: "800",
  },
  mrpPrice: {
    color: "#AFAFAF",
    fontSize: s(10),
    fontWeight: "800",
    textDecorationLine: "underline line-through",
  },
});
