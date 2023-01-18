"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Button = (0, _utils.createStyled)('button')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Button = Button;
function _default(customTheme, props, state) {
  var theme = _objectSpread({}, customTheme);
  if (props.secondary) {
    theme = _objectSpread(_objectSpread({}, theme), theme.secondary);
  }
  if (props.medium) {
    theme = _objectSpread(_objectSpread({}, theme), theme.medium);
  }
  if (props.inverse) {
    theme = _objectSpread(_objectSpread({}, theme), theme.inverse);
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
    alignItems: theme.alignItems,
    fontWeight: theme.fontWeight,
    boxSizing: theme.boxSizing,
    fontSize: theme.fontSize,
    display: theme.display,
    height: theme.height,
    color: theme.color,
    width: theme.width,
    outline: 'none',
    cursor: theme.cursor,
    icon: {
      width: theme.iconWidth,
      height: theme.iconHeight,
      fill: theme.iconFill,
      cursor: theme.cursor
    }
  };
}