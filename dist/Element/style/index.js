"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementText = exports.Element = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject, _templateObject2;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Element = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Element = Element;
var ElementText = (0, _utils.createStyled)('span')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.ElementText = ElementText;
function _default(customTheme, props, state) {
  var theme = _objectSpread({}, customTheme);
  var _theme = theme,
    styles = _theme.styles;
  var hovered = props.hovered,
    primary = props.primary,
    secondary = props.secondary,
    disabled = props.disabled;
  if (primary) {
    theme = _objectSpread(_objectSpread({}, theme), theme.primary);
  }
  if (secondary) {
    theme = _objectSpread(_objectSpread({}, theme), theme.secondary);
  }
  if (disabled) {
    theme = _objectSpread(_objectSpread({}, theme), theme.disabled);
  }
  if (hovered) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      borderColor: theme.hoverBorderColor
    });
  }
  return {
    element: {
      display: theme.display,
      alignItems: theme.alignItems,
      width: theme.width,
      height: theme.height,
      minHeight: theme.minHeight,
      background: theme.background,
      padding: theme.padding,
      boxSizing: theme.boxSizing,
      borderWidth: theme.borderWidth,
      borderStyle: theme.borderStyle,
      borderColor: theme.borderColor,
      borderRadius: theme.borderRadius,
      position: theme.position,
      userSelect: 'none',
      outline: 'none'
    },
    toggleButton: {
      fill: theme.iconColor
    },
    elementIcon: {
      fill: theme.iconColor,
      marginLeft: theme.elementIconMarginLeft
    },
    displayButton: {
      fill: theme.iconColor,
      position: 'absolute',
      right: styles.gutter
    },
    elementText: {
      marginLeft: styles.gutter,
      color: theme.color,
      fontSize: theme.fontSize,
      fontFamily: theme.fontFamily,
      lineHeight: theme.lineHeight,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    }
  };
}