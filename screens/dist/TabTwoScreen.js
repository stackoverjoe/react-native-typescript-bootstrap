"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var Map_1 = require("Map");
var Themed_1 = require("../components/Themed");
function TabTwoScreen() {
    return (React.createElement(Themed_1.View, { style: styles.container },
        React.createElement(Map_1["default"], null)));
}
exports["default"] = TabTwoScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "flex-end",
        alignItems: "center"
    }
});
