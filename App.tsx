import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Signin from "./src/screens/Signin";
import InputBox from "./src/components/InputBox";
import Feather from "@expo/vector-icons/Feather";
import { s } from "react-native-size-matters";
import LoginButton from "./src/components/LoginButton";
import SocialMediaCard from "./src/components/SocialMediaCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Signin />
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
      <LoginButton />
      <SocialMediaCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
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
});
