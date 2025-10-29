import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { s } from "react-native-size-matters";

interface BrandCardProps {
  label: string;
  icon: React.ReactNode;
  onPress?: () => void;
  isSelected: boolean;
}

const BrandCard: FC<BrandCardProps> = ({
  label,
  icon,
  onPress,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isSelected && styles.changeBrandColor]}
      activeOpacity={0.8}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default BrandCard;

const styles = StyleSheet.create({
  container: {
    width: s(54),
    height: s(53),
    borderRadius: s(11),
    backgroundColor: "#F2F2F2",
    marginRight: s(20),
    borderColor: "#D8D3D380",
    justifyContent: "center",
    alignItems: "center",
  },
  changeBrandColor: {
    backgroundColor: "#F17547",
    color: "#D8D3D380",
  },
});
