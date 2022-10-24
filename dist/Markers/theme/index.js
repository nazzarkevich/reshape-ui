"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basic = function basic(styles) {
  var primaryForeground = styles.primaryForeground,
      primaryOpacity = styles.primaryOpacity;
  var borderColor = (0, _color["default"])(primaryForeground).alpha(primaryOpacity).rgb().string();
  var hoverBorderColor = (0, _color["default"])(primaryForeground).alpha(primaryOpacity).rgb().string();
  return {
    display: 'inline-block',
    boxSizing: 'border-box',
    width: styles.gutter * 3 + 1,
    height: styles.gutter * 3 + 1,
    position: 'relative',
    backgroundColor: 'transparent',
    borderColor: borderColor,
    borderHoverColor: hoverBorderColor
  };
};

var theme = function theme(styles) {
  return _objectSpread({}, basic(styles));
};

var _default = theme;
exports["default"] = _default;