"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var stack_1 = require("@react-navigation/stack");
var React = require("react");
var Colors_1 = require("../constants/Colors");
var useColorScheme_1 = require("../hooks/useColorScheme");
var TabOneScreen_1 = require("../screens/TabOneScreen");
var TabTwoScreen_1 = require("../screens/TabTwoScreen");
var TabThreeScreen_1 = require("../screens/TabThreeScreen");
var vector_icons_2 = require("@expo/vector-icons");
var BottomTab = bottom_tabs_1.createBottomTabNavigator();
function BottomTabNavigator() {
    var colorScheme = useColorScheme_1["default"]();
    return (React.createElement(BottomTab.Navigator, { initialRouteName: "TabOne", tabBarOptions: { activeTintColor: Colors_1["default"][colorScheme].tint } },
        React.createElement(BottomTab.Screen, { name: "TabOne", component: TabOneNavigator, options: {
                tabBarIcon: function (_a) {
                    var color = _a.color;
                    return (React.createElement(TabBarIcon, { name: "ios-code", color: color }));
                }
            } }),
        React.createElement(BottomTab.Screen, { name: "Map", component: TabTwoNavigator, options: {
                tabBarIcon: function (_a) {
                    var color = _a.color;
                    return (React.createElement(vector_icons_2.MaterialCommunityIcons, { size: 25, name: "map-marker-outline", color: color }));
                }
            } }),
        React.createElement(BottomTab.Screen, { name: "TabThree", component: TabThreeNavigator, options: {
                tabBarIcon: function (_a) {
                    var color = _a.color;
                    return (React.createElement(TabBarIcon, { name: "ios-code", color: color }));
                }
            } })));
}
exports["default"] = BottomTabNavigator;
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
    return React.createElement(vector_icons_1.Ionicons, __assign({ size: 30, style: { marginBottom: -3 } }, props));
}
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
var TabOneStack = stack_1.createStackNavigator();
function TabOneNavigator() {
    return (React.createElement(TabOneStack.Navigator, null,
        React.createElement(TabOneStack.Screen, { name: "TabOneScreen", component: TabOneScreen_1["default"], options: { headerTitle: "Tab One Title" } })));
}
var TabTwoStack = stack_1.createStackNavigator();
function TabTwoNavigator() {
    return (React.createElement(TabTwoStack.Navigator, null,
        React.createElement(TabTwoStack.Screen, { name: "TabTwoScreen", component: TabTwoScreen_1["default"], options: { headerTitle: "Map Screen" } })));
}
var TabThreeStack = stack_1.createStackNavigator();
function TabThreeNavigator() {
    return (React.createElement(TabThreeStack.Navigator, null,
        React.createElement(TabThreeStack.Screen, { name: "TabThreeScreen", component: TabThreeScreen_1["default"], options: { headerTitle: "Tab Three Title" } })));
}
