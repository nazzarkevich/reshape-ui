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
    tooltip: {
      padding: styles.gutter,
      background: styles.primaryBackground,
      borderRadius: '2px',
      boxSizing: 'border-box',
      boxShadow: "0px 2px 8px ".concat(styles.primaryShadow),
      color: styles.primaryForeground,
      fontFamily: styles.fontFamily,
      fontSize: styles.textNormal,
      fontWeight: styles.fontWeightNormal,
      lineHeight: styles.lineHeightNormal,
      position: 'absolute',
      zIndex: styles.zIndex
    },
    wrapper: {
      display: 'inline-flex'
    }
  };
};

var theme = function theme(styles) {
  return _objectSpread({}, basic(styles));
};

var _default = theme;
exports["default"] = _default;