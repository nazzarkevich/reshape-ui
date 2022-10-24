"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-param-reassign */
var capitalizeLetter = function capitalizeLetter(str) {
  return str.split('-').map(function (item) {
    return item[0].toUpperCase() + item.substr(1);
  }).join('');
};

var normalizeStyles = function normalizeStyles(styles) {
  return Object.keys(styles).reduce(function (acc, property) {
    if (property.includes('&::')) {
      var key = capitalizeLetter(property);
      acc = _objectSpread({}, acc, _defineProperty({}, key, styles[property]));
    } else {
      acc = _objectSpread({}, acc, _defineProperty({}, property, styles[property]));
    }

    return acc;
  }, {});
};

var _default = normalizeStyles;
exports["default"] = _default;