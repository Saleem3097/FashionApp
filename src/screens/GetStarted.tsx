import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from "react-native";
import React from "react";
import TheButton from "../components/LoginButton";
import { s } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const GetStarted = () => {
  return (
    <ImageBackground
      style={styles.daddy}
      source={require("../assets/GetStarted.jpg")}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.8)"]}
        style={styles.overlay}
      >
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            You want{"\n"}Authentic, here you go!
          </Text>
          <Text style={styles.subText}>Find it here, buy it now!</Text>
          <View style={styles.buttonPush}>
            <TheButton name={"Get Started"} />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  daddy: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: s(80),
    paddingHorizontal: s(20),
  },
  textContainer: {
    alignItems: "center",
  },
  mainText: {
    fontSize: s(28),
    fontWeight: "700",
    textAlign: "center",
    marginBottom: s(10),
    lineHeight: s(36),
    color: "#FFFFFF",
    letterSpacing: s(1),
  },
  subText: {
    fontSize: s(13),
    fontWeight: "500",
    color: "#F2F2F2",
    marginBottom: s(40),
  },
  buttonPush: {
    width: "100%",
    alignItems: "center",
  },
});
