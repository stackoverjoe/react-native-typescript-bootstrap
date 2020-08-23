import * as React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feature } from "../types";
import { NavigationProp } from "@react-navigation/native";

interface FeatureScreenNavigationProps {
  navigation: NavigationProp<any, any>;
}

//define new features and their navigation component name here
var features: Array<Feature> = [
  { name: "Camera", destination: "CameraScreen", id: 1 },
];

export default function TabOneScreen({
  navigation,
}: FeatureScreenNavigationProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {features.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => navigation.navigate(item.destination)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 25,
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
    margin: 2,
    marginBottom: 4,
    borderColor: "#008cdd",
    borderWidth: 1,
    backgroundColor: "#1cc6ff",
    borderRadius: 8,
  },
});
