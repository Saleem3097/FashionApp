import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const PromoOfferCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.promoMessage}>20% OFF DURING THE WEEKEND</Text>
      <TouchableOpacity style={styles.promoButton}>
        <Text style={styles.promoButtonText}>Get now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromoOfferCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F17547",
    height: s(125),
    width: s(260),
    marginTop: s(20),
    borderRadius: s(15),
  },
  promoMessage: {
    height: s(40),
    width: s(181),
    fontSize: s(18),
    fontWeight: "700",
    color: "#FFFFFF",
    top: s(24),
    left: s(19),
  },
  promoButton: {
    width: s(80),
    height: s(34.12),
    borderRadius: s(17.65),
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignContent: "center",
    top: s(40),
    left: s(19),
  },
  promoButtonText: {
    color: "#F17547",
    textAlign: "center",
    fontWeight: "700",
  },
});
