"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _error = _interopRequireDefault(require("./error"));
var _active = _interopRequireDefault(require("./active"));
var _primary = _interopRequireDefault(require("./primary"));
var _secondary = _interopRequireDefault(require("./secondary"));
var _editable = _interopRequireDefault(require("./editable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var basic = function basic(styles) {
  return {
    display: 'inline-block',
    padding: styles.gutter - 3,
    boxSizing: 'border-box',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: styles.primary,
    borderRadius: '2px',
    fontFamily: styles.fontFamily,
    fontSize: styles.textNormal,
    lineHeight: styles.textNormal,
    textAlign: 'left',
    color: styles.primary,
    background: styles.primaryBackground,
    cursor: 'pointer'
  };
};
var theme = function theme(styles) {
  return _objectSpread(_objectSpread({}, basic(styles)), {}, {
    error: _objectSpread({}, (0, _error["default"])(styles)),
    active: _objectSpread({}, (0, _active["default"])(styles)),
    primary: _objectSpread({}, (0, _primary["default"])(styles)),
    secondary: _objectSpread({}, (0, _secondary["default"])(styles)),
    editable: _objectSpread({}, (0, _editable["default"])(styles))
  });
};
var _default = theme;
exports["default"] = _default;