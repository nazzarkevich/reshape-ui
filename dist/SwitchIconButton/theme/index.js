"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var basic = function basic(styles) {
  var hoverColor = (0, _color["default"])(styles.primaryForeground).alpha(0.05).rgb().string();
  var activeHoverBackground = (0, _color["default"])(styles.primary).alpha(0.1).rgb().string();
  var secondaryHoverBackground = (0, _color["default"])(styles.primaryForeground).alpha(0.1).rgb().string();
  return {
    padding: '6px',
    display: 'inline-flex',
    boxSizing: 'border-box',
    background: 'transparent',
    hoverBackground: hoverColor,
    activeHoverBackground: activeHoverBackground,
    secondaryHoverBackground: secondaryHoverBackground
  };
};
function _default(styles) {
  var basicStyle = basic(styles);
  return _objectSpread({}, basicStyle);
}