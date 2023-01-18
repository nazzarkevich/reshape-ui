"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _button = require("../button.ct");
var _templateObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Button = (0, _utils.createStyled)('button')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Button = Button;
function _default(customTheme, props) {
  var theme = _objectSpread({}, customTheme);
  var _theme = theme,
    styles = _theme.styles;
  var secondary = props.secondary,
    medium = props.medium,
    large = props.large,
    fullWidth = props.fullWidth,
    inverse = props.inverse,
    rounded = props.rounded,
    variant = props.variant;
  if (secondary) {
    theme = _objectSpread(_objectSpread({}, theme), theme.secondary);
  }
  if (medium) {
    theme = _objectSpread(_objectSpread({}, theme), theme.medium);
  }
  if (large) {
    theme = _objectSpread(_objectSpread({}, theme), theme.large);
  }
  if (fullWidth) {
    theme = _objectSpread(_objectSpread({}, theme), theme.fullWidth);
  }
  if (inverse) {
    theme = _objectSpread(_objectSpread({}, theme), theme.inverse);
  }
  if (rounded) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      borderRadius: '100%',
      width: styles.gutter * 5,
      height: styles.gutter * 5,
      paddingRight: 0,
      paddingLeft: 0
    });
  }
  if (variant === _button.VARIANTS.CONTAINED) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      borderColor: 'transparent',
      boxShadow: "0px 2px 8px ".concat(styles.primaryShadow)
    });
  }
  return {
    paddingRight: theme.paddingRight,
    paddingLeft: theme.paddingLeft,
    borderRadius: theme.borderRadius,
    borderWidth: theme.borderWidth,
    borderStyle: theme.borderStyle,
    borderColor: theme.borderColor,
    fontFamily: theme.fontFamily,
    lineHeight: theme.lineHeight,
    background: theme.background,
    fontWeight: theme.fontWeight,
    boxSizing: theme.boxSizing,
    fontSize: theme.fontSize,
    display: theme.display,
    width: theme.width,
    height: theme.height,
    color: theme.color,
    outline: 'none',
    boxShadow: theme.boxShadow
  };
}