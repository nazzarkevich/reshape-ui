"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _active = _interopRequireDefault(require("./active"));

var _inactive = _interopRequireDefault(require("./inactive"));

var _accent = _interopRequireDefault(require("./accent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basic = function basic(styles) {
  return {
    color: styles.primaryForeground,
    fontFamily: styles.fontFamily,
    fontSize: styles.textNormal,
    fontWeight: styles.fontWeightNormal,
    lineHeight: styles.lineHeightLarge
  };
};

var theme = function theme(styles) {
  return _objectSpread({}, basic(styles), {
    active: _objectSpread({}, (0, _active["default"])(styles)),
    accent: _objectSpread({}, (0, _accent["default"])(styles)),
    inactive: _objectSpread({}, (0, _inactive["default"])(styles))
  });
};

var _default = theme;
exports["default"] = _default;