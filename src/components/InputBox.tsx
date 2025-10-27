import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { FC, JSX } from "react";
import { s } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";

interface InputBoxProps {
  title?: string | undefined;
  FrontIconComponent?: React.FC | null;
  frontshowIcon?: Boolean;
  BackIconComponent?: React.FC | null;
  backshowIcon?: Boolean;
}

const InputBox: FC<InputBoxProps> = ({
  title,
  FrontIconComponent,
  frontshowIcon,
  backshowIcon,
  BackIconComponent,
}) => {
  return (
    <View style={styles.container}>
      {frontshowIcon && FrontIconComponent && <FrontIconComponent />}
      <TextInput placeholder={title} style={styles.inputBoxStyle} />
      {backshowIcon && BackIconComponent && <BackIconComponent />}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    margin: s(15),
    height: s(55),
    width: s(317),
    backgroundColor: "#f3F3F3",
    borderRadius: s(10),
    borderColor: "#A8A8A9",
    borderWidth: s(0.5),
    flexDirection: "row",
    paddingHorizontal: s(10),
    paddingTop: s(10),
    alignSelf: "center",
  },
  inputBoxStyle: {
    fontSize: s(12),
    paddingStart: s(10),
    flex: 1,
  },
});
