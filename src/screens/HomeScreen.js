import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ElectricBackground from "../components/ElectricBackground";
import { COLORS } from "../utils/theme";

export default function HomeScreen() {
  return (
    <ElectricBackground>
      <View style={styles.container}>
        <Text style={styles.title}>⚡ AlinGo Super App ⚡</Text>
      </View>
    </ElectricBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.neonGreen,
    fontSize: 26,
    fontWeight: "bold",
    textShadowColor: COLORS.neonGreen,
    textShadowRadius: 15,
  },
});
