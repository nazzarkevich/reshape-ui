"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inverse = _interopRequireDefault(require("./inverse"));

var _medium = _interopRequireDefault(require("./medium"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basic = function basic(styles) {
  return {
    borderColor: styles.primaryForeground,
    background: styles.primaryBackground,
    lineHeight: styles.lineHeightNormal,
    fontWeight: styles.fontWeightLight,
    color: styles.primaryForeground,
    fontFamily: styles.fontFamily,
    fontSize: styles.textMedium,
    paddingRight: styles.gutter - 3,
    paddingLeft: styles.gutter - 3,
    height: styles.gutter * 4.5,
    display: 'inline-flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderRadius: '2px',
    borderWidth: '1px',
    // Icon styles
    iconWidth: styles.gutter * 3,
    iconHeight: styles.gutter * 3,
    iconFill: styles.primaryForeground,
    cursor: 'pointer'
  };
};

var theme = function theme(styles) {
  return _objectSpread({}, basic(styles), {
    inverse: _objectSpread({}, (0, _inverse["default"])(styles)),
    medium: _objectSpread({}, (0, _medium["default"])(styles))
  });
};

var _default = theme;
exports["default"] = _default;