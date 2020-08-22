"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var EditScreenInfo_1 = require("../components/EditScreenInfo");
var Themed_1 = require("../components/Themed");
function TabTwoScreen() {
    return (React.createElement(Themed_1.View, { style: styles.container },
        React.createElement(Themed_1.Text, { style: styles.title }, "Tab Two"),
        React.createElement(Themed_1.View, { style: styles.separator, lightColor: "#eee", darkColor: "rgba(255,255,255,0.1)" }),
        React.createElement(EditScreenInfo_1["default"], { path: "/screens/TabTwoScreen.tsx" })));
}
exports["default"] = TabTwoScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%"
    }
});
