import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import PromoOfferCard from "./PromoOfferCard";

const promoOffersData = [
  {
    label: "20% OFF DURING THE WEEKEND!",
    bannerColor: "#F17547",
    promoMessageColor: "#FFFFFF",
    buttonColor: "#FFFFFF",
    buttonText: "#F17547",
  },
  {
    label: "15% OFF DURING THE WEEKDAYS!",
    bannerColor: "#1383F1",
    promoMessageColor: "#FFFFFF",
    buttonColor: "#50D63B",
    buttonText: "#FFFFFF",
  },
];

const PromoOfferList = () => {
  return (
    <FlatList
      data={promoOffersData}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => (
        <PromoOfferCard
          label={item.label}
          bannerColor={item.bannerColor}
          promoMessageColor={item.promoMessageColor}
          buttonColor={item.buttonColor}
          buttonText={item.buttonText}
        />
      )}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default PromoOfferList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
