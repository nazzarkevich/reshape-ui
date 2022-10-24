"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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