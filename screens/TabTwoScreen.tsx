import * as React from "react";
import { StyleSheet } from "react-native";
import Map from "../components/Map";
import { View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
