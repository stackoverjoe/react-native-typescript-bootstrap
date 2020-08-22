"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_maps_1 = require("react-native-maps");
var react_native_1 = require("react-native");
var Location = require("expo-location");
var ExpoMap = /** @class */ (function (_super) {
    __extends(ExpoMap, _super);
    function ExpoMap(props) {
        var _this = _super.call(this, props) || this;
        //Default to San Francisco if no permission allowed
        _this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        };
        return _this;
    }
    //Function to return a new object consisting of the type expected by the MapView region prop.
    ExpoMap.prototype.convertCoords = function (coords) {
        return {
            latitude: coords.coords.latitude,
            longitude: coords.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        };
    };
    ExpoMap.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, location;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Location.requestPermissionsAsync()];
                    case 1:
                        status = (_a.sent()).status;
                        if (!(status !== "granted")) return [3 /*break*/, 2];
                        alert("This app requires location permission to function correctly.");
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Location.getCurrentPositionAsync({})];
                    case 3:
                        location = _a.sent();
                        this.setState({ region: this.convertCoords(location) });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExpoMap.prototype.componentDidMount = function () {
        this.getLocation();
    };
    ExpoMap.prototype.onRegionChange = function () {
        this.getLocation();
    };
    ExpoMap.prototype.render = function () {
        return (react_1["default"].createElement(react_native_maps_1["default"], { style: styles.map, region: this.state.region, showsUserLocation: true }));
    };
    return ExpoMap;
}(react_1["default"].Component));
exports["default"] = ExpoMap;
var styles = react_native_1.StyleSheet.create({
    map: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});
