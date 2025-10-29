import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import MenuCard from "../components/MenuCard";
import { s } from "react-native-size-matters";
import GreetName from "../components/GreetName";
import PromoOfferList from "../components/PromoOfferList";
import CategoryHeader from "../components/CategoryHeader";
import BrandsList from "../components/BrandsList";

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <MenuCard />
      <GreetName />
      <PromoOfferList />
      <CategoryHeader />
      <BrandsList />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: { marginTop: s(60), marginHorizontal: s(23) },
});
