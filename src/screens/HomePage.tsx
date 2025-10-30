import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import MenuCard from "../components/MenuCard";
import { s } from "react-native-size-matters";
import GreetName from "../components/GreetName";
import PromoOfferList from "../components/PromoOfferList";
import CategoryHeader from "../components/CategoryHeader";
import BrandsList from "../components/BrandsList";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <MenuCard />
      <GreetName />
      <PromoOfferList />
      <CategoryHeader />
      <BrandsList />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: s(20),
        }}
      >
        <ProductCard />
        <ProductCard />
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: { marginTop: s(35), marginHorizontal: s(23) },
});
