import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../utils/theme";

export default function ElectricBackground({ children }) {
  return (
    <LinearGradient
      colors={["#000000", "#001a00", "#000000"]}
      style={styles.container}
    >
      <View style={styles.glowLine1} />
      <View style={styles.glowLine2} />
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  glowLine1: {
    position: "absolute",
    width: "120%",
    height: 2,
    backgroundColor: COLORS.neonGreen,
    top: "30%",
    transform: [{ rotate: "25deg" }],
    shadowColor: COLORS.neonGreen,
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  glowLine2: {
    position: "absolute",
    width: "120%",
    height: 2,
    backgroundColor: COLORS.neonGreen,
    top: "70%",
    transform: [{ rotate: "-25deg" }],
    shadowColor: COLORS.neonGreen,
    shadowRadius: 20,
    shadowOpacity: 1,
  },
});
