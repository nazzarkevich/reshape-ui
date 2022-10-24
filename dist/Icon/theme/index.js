"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tertiary = _interopRequireDefault(require("./tertiary"));

var _primary = _interopRequireDefault(require("./primary"));

var _secondary = _interopRequireDefault(require("./secondary"));

var _disabled = _interopRequireDefault(require("./disabled"));

var _inverse = _interopRequireDefault(require("./inverse"));

var _error = _interopRequireDefault(require("./error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basic = function basic(styles) {
  var primaryForeground = styles.primaryForeground;
  return {
    // svg
    fill: primaryForeground,
    stroke: primaryForeground,
    display: 'inline-block',
    boxSizing: 'border-box',
    width: styles.gutter * 1.5,
    height: styles.gutter * 1.5,
    transform: 'none',
    cursor: 'default',
    visibility: 'visible'
  };
};

var theme = function theme(styles) {
  return _objectSpread({}, basic(styles), {
    primary: _objectSpread({}, (0, _primary["default"])(styles)),
    secondary: _objectSpread({}, (0, _secondary["default"])(styles)),
    error: _objectSpread({}, (0, _error["default"])(styles)),
    tertiary: _objectSpread({}, (0, _tertiary["default"])(styles)),
    disabled: _objectSpread({}, (0, _disabled["default"])(styles)),
    inverse: _objectSpread({}, (0, _inverse["default"])(styles))
  });
};

var _default = theme;
exports["default"] = _default;