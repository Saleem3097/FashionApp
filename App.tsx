import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Signin from "./src/screens/Signin";
import InputBox from "./src/components/InputBox";
import Feather from "@expo/vector-icons/Feather";
import { s } from "react-native-size-matters";
import LoginButton from "./src/components/LoginButton";
import SocialMediaCard from "./src/components/SocialMediaCard";
import Welcome from "./src/screens/Welcome";
import GetStarted from "./src/screens/GetStarted";

export default function App() {
  return (
    <View style={styles.container}>
      <GetStarted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
});
