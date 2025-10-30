import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import WelcomeText from "../components/WeclcomeText";
import InputBox from "../components/InputBox";
import { Feather } from "@expo/vector-icons";
import LoginButton from "../components/LoginButton";
import SocialMediaCard from "../components/SocialMediaCard";
import { s, vs } from "react-native-size-matters";
import TheButton from "../components/LoginButton";

const Signin = () => {
  return (
    <View>
      <WelcomeText />
      <InputBox
        title={"Username or Email"}
        FrontIconComponent={() => (
          <Feather name="user" size={24} color="#A8A8A9" />
        )}
        frontshowIcon={true}
        BackIconComponent={() => (
          <Feather name="eye" size={24} color="#A8A8A9" />
        )}
        backshowIcon={false}
      />
      <InputBox
        title={"Password"}
        FrontIconComponent={() => (
          <Feather name="user" size={24} color="#A8A8A9" />
        )}
        frontshowIcon={true}
        BackIconComponent={() => (
          <Feather name="eye" size={24} color="#A8A8A9" />
        )}
        backshowIcon={true}
      />
      <TouchableOpacity style={styles.FgtPwd}>
        <Text style={styles.FgtPwdTxt}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.TheButtonMT}>
        <TheButton name={"Login"} />
      </View>
      <SocialMediaCard />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  FgtPwd: {
    marginTop: s(6),
    marginLeft: s(220),
    alignSelf: "center",
  },
  FgtPwdTxt: {
    color: "#F83758",
    fontSize: s(12),
    fontWeight: "400",
  },
  TheButtonMT: {
    marginTop: vs(52),
  },
});
