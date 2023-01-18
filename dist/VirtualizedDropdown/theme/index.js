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
  var primaryForeground = styles.primaryForeground,
    primaryOpacity = styles.primaryOpacity;
  var idleTitleColor = (0, _color["default"])(primaryForeground).alpha(primaryOpacity).rgb().string();
  var hoverTitleColor = (0, _color["default"])(primaryForeground).alpha(0.75).rgb().string();
  return {
    width: '100%',
    display: 'block',
    boxSizing: 'border-box',
    position: 'relative',
    background: 'transparent',
    fontFamily: styles.fontFamily,
    fontSize: styles.textNormal,
    lineHeight: styles.lineHeightNormal,
    fontWeight: styles.fontWeightNormal,
    // input
    idleInputColor: styles.primaryForeground,
    //title
    idleTitleColor: idleTitleColor,
    primaryTitleColor: styles.primary,
    secondaryTitleColor: styles.primaryForeground,
    // hover
    hoverTitleColor: hoverTitleColor,
    // list
    listTop: "calc(100% + ".concat(styles.gutter, "px)"),
    listBottom: '0px'
  };
};
function _default(styles) {
  var basicStyle = basic(styles);
  return _objectSpread({}, basicStyle);
}