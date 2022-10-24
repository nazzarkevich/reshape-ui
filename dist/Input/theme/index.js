"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

var _secondary = _interopRequireDefault(require("./secondary"));

var _medium = _interopRequireDefault(require("./medium"));

var _error = _interopRequireDefault(require("./error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basic = function basic(styles) {
  var primaryForeground = styles.primaryForeground;
  var placeholderColor = (0, _color["default"])(primaryForeground).alpha(0.50).rgb().string();
  var hoverPlaceholderColor = (0, _color["default"])(primaryForeground).alpha(0.75).rgb().string();
  return {
    width: '100%',
    display: 'inline-block',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    boxSizing: 'border-box',
    fontFamily: styles.fontFamily,
    fontSize: styles.textNormal,
    lineHeight: styles.lineHeightNormal,
    fontWeight: styles.fontWeightNormal,
    idleColor: styles.primary,
    idlePlaceholder: placeholderColor,
    idleBorderStyle: 'none',
    idleBackground: 'transparent',
    idleBoxShadow: 'none',
    idleOutline: 'none',
    hoverPlaceholderColor: hoverPlaceholderColor
  };
};

var theme = function theme(styles) {
  return _objectSpread({}, basic(styles), {
    secondary: _objectSpread({}, (0, _secondary["default"])(styles)),
    medium: _objectSpread({}, (0, _medium["default"])(styles)),
    error: _objectSpread({}, (0, _error["default"])(styles))
  });
};

var _default = theme;
exports["default"] = _default;