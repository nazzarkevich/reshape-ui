"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var basic = function basic(styles) {
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
    // titleWrapper
    titlePaddingLeft: styles.gutter,
    titlePaddingRight: styles.gutter,
    // list
    listTop: "calc(100% + ".concat(styles.gutter, "px)"),
    listBottom: 'auto',
    // listItem
    listItemPaddingLeft: styles.gutter * 1.5
  };
};
function _default(styles) {
  var basicStyle = basic(styles);
  return _objectSpread({}, basicStyle);
}