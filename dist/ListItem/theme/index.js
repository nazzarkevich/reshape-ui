"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hover = _interopRequireDefault(require("./hover"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var basic = function basic(styles) {
  return {
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: styles.gutter * 1.5,
    paddingLeft: styles.gutter * 1.5,
    background: styles.background,
    hoverBackground: styles.tertiaryBackground
  };
};
var theme = function theme(styles) {
  return _objectSpread(_objectSpread({}, basic(styles)), {}, {
    hover: _objectSpread({}, (0, _hover["default"])(styles))
  });
};
var _default = theme;
exports["default"] = _default;