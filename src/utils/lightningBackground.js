import { StyleSheet } from "react-native";

export const lightningStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  lightning: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderTopWidth: 2,
    borderColor: "#ff0000",
    shadowColor: "#ff0000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
