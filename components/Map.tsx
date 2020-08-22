import React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";

interface Props {}

interface State {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

export default class ExpoMap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    //Default to San Francisco if no permission allowed
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  //Function to return a new object consisting of the type expected by the MapView region prop.
  convertCoords(coords: Location.LocationData): State["region"] {
    return {
      latitude: coords.coords.latitude,
      longitude: coords.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  async getLocation() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      alert("This app requires location permission to function correctly.");
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ region: this.convertCoords(location) });
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  onRegionChange() {
    this.getLocation();
  }

  render() {
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        showsUserLocation
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
