"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basic = function basic(styles) {
  return {
    width: '100%',
    display: 'block',
    boxSizing: 'border-box',
    position: 'relative',
    paddingRight: 0,
    paddingLeft: 0,
    zIndex: styles.zIndex,
    borderRadius: 2,
    overflow: 'auto',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
    paddingTop: styles.gutter / 2,
    paddingBottom: styles.gutter / 2,
    maxHeight: styles.gutter * 20,
    background: styles.primaryBackground
  };
};

var theme = function theme(styles) {
  return _objectSpread({}, basic(styles));
};

var _default = theme;
exports["default"] = _default;