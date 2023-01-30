"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _primary = _interopRequireDefault(require("./primary"));
var _secondary = _interopRequireDefault(require("./secondary"));
var _disabled = _interopRequireDefault(require("./disabled"));
var _tertiary = _interopRequireDefault(require("./tertiary"));
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var basic = function basic(styles) {
  var contentColor = (0, _color["default"])(styles.primaryForeground).alpha(styles.primaryOpacity).rgb().string();
  return {
    contentColor: contentColor,
    height: 1,
    minHeight: styles.gutter * 4,
    color: styles.primaryForeground,
    background: styles.primaryBackground,
    fontFamily: styles.fontFamily,
    lineHeight: styles.lineHeightNormal,
    fontSize: styles.textNormal,
    padding: styles.gutter * 1.25,
    // 10px
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: 0,
    position: 'relative',
    // elementIcon
    elementIconMarginLeft: styles.gutter,
    // hover
    hoverBorderColor: styles.primary
  };
};
var theme = function theme(styles) {
  return _objectSpread(_objectSpread({}, basic(styles)), {}, {
    primary: _objectSpread({}, (0, _primary["default"])(styles)),
    secondary: _objectSpread({}, (0, _secondary["default"])(styles)),
    disabled: _objectSpread({}, (0, _disabled["default"])(styles)),
    tertiary: _objectSpread({}, (0, _tertiary["default"])(styles))
  });
};
var _default = theme;
exports["default"] = _default;