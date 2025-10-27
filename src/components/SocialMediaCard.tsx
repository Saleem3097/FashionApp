import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

const SocialMediaCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.imageHeaderText}>- OR Continue with -</Text>
      <View style={styles.imageConatiner}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require("../assets/google.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.image} source={require("../assets/apple.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.image} source={require("../assets/fb.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageBottom}>
        <Text style={{ fontSize: s(14), color: "#575757", marginRight: s(5) }}>
          Create An Account
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: s(14),
              color: "#F83758",
              marginRight: s(5),
              textDecorationLine: "underline",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialMediaCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  imageConatiner: {
    flexDirection: "row",
  },
  imageHeaderText: { textAlign: "center", marginBottom: s(20) },
  image: {
    height: s(50),
    width: s(50),
    borderRadius: s(25),
  },
  imageBottom: {
    flexDirection: "row",
    marginTop: s(20),
  },
});
