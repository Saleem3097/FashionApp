import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

interface PromoOfferCardProps {
  label: string;
  bannerColor: string;
  promoMessageColor: string;
  buttonColor: string;
  buttonText: string;
}

const PromoOfferCard: React.FC<PromoOfferCardProps> = ({
  label,
  bannerColor,
  promoMessageColor,
  buttonColor,
  buttonText,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bannerColor }]}>
      <Text style={[styles.promoMessage, { color: promoMessageColor }]}>
        {label}
      </Text>

      <TouchableOpacity
        style={[styles.promoButton, { backgroundColor: buttonColor }]}
      >
        <Text style={[styles.promoButtonText, { color: buttonText }]}>
          Get now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromoOfferCard;

const styles = StyleSheet.create({
  container: {
    height: s(130),
    width: s(240),
    marginTop: s(20),
    borderRadius: s(15),
    paddingHorizontal: s(20),
    paddingVertical: s(24),
    marginRight: s(19),
  },
  promoMessage: {
    fontSize: s(18),
    fontWeight: "700",
    marginBottom: s(16),
  },
  promoButton: {
    width: s(80),
    height: s(34.12),
    borderRadius: s(17.65),
    justifyContent: "center",
    alignItems: "center",
  },
  promoButtonText: {
    fontWeight: "700",
  },
});
