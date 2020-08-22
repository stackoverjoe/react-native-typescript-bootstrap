import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          Map: {
            screens: {
              TabTwoScreen: "Map",
            },
          },
          TabThree: {
            screens: {
              TabTwoScreen: "three",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
