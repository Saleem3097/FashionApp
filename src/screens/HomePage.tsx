import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import MenuCard from "../components/MenuCard";
import { s } from "react-native-size-matters";
import GreetName from "../components/GreetName";
import PromoOfferList from "../components/PromoOfferList";
import CategoryHeader from "../components/CategoryHeader";
import BrandsList from "../components/BrandsList";
import ProductCardList from "../components/ProductCardList";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <MenuCard />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <GreetName />
        <PromoOfferList />
        <CategoryHeader />
        <BrandsList />
        <ProductCardList />
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: s(35),
    marginHorizontal: s(23),
  },
  scrollContent: {
    paddingBottom: s(60),
  },
});
