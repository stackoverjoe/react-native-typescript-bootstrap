"use strict";
exports.__esModule = true;
var Linking = require("expo-linking");
exports["default"] = {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    TabOne: {
                        screens: {
                            TabOneScreen: "one"
                        }
                    },
                    Map: {
                        screens: {
                            TabTwoScreen: "Map"
                        }
                    },
                    TabThree: {
                        screens: {
                            TabTwoScreen: "three"
                        }
                    }
                }
            },
            NotFound: "*"
        }
    }
};
