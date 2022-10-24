"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.Button = void 0;

var _utils = require("../../utils");

var _button = require("../button.ct");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = (0, _utils.createStyled)('button')(_templateObject());
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
    theme = _objectSpread({}, theme, {}, theme.secondary);
  }

  if (medium) {
    theme = _objectSpread({}, theme, {}, theme.medium);
  }

  if (large) {
    theme = _objectSpread({}, theme, {}, theme.large);
  }

  if (fullWidth) {
    theme = _objectSpread({}, theme, {}, theme.fullWidth);
  }

  if (inverse) {
    theme = _objectSpread({}, theme, {}, theme.inverse);
  }

  if (rounded) {
    theme = _objectSpread({}, theme, {
      borderRadius: '100%',
      width: styles.gutter * 5,
      height: styles.gutter * 5,
      paddingRight: 0,
      paddingLeft: 0
    });
  }

  if (variant === _button.VARIANTS.CONTAINED) {
    theme = _objectSpread({}, theme, {
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