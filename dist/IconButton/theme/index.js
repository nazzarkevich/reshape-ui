"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _color = _interopRequireDefault(require("color"));
var _active = _interopRequireDefault(require("./active"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var basic = function basic(styles) {
  var hoverBackground = (0, _color["default"])(styles.primaryForeground).alpha(styles.tertiaryOpacity).rgb().string();
  return {
    width: styles.gutter * 3,
    height: styles.gutter * 3,
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1px',
    background: 'transparent',
    hoverBackground: hoverBackground,
    //icon
    idleIconColor: styles.primaryForeground,
    hoverIconColor: styles.primaryForeground
  };
};
var theme = function theme(styles) {
  return _objectSpread(_objectSpread({}, basic(styles)), {}, {
    active: _objectSpread({}, (0, _active["default"])(styles))
  });
};
var _default = theme;
exports["default"] = _default;