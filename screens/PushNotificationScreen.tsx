import * as React from "react";
import { StyleSheet } from "react-native";

import PushNotification from "../components/PushNotification";

export default function CameraScreen() {
  return <PushNotification />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
