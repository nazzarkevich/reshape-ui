"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemText = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ListItemText = (0, _utils.createStyled)('span')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.ListItemText = ListItemText;
function _default(customTheme, props, state) {
  var theme = _objectSpread({}, customTheme);
  if (props.inactive) {
    theme = _objectSpread(_objectSpread({}, theme), theme.inactive);
  }
  if (props.active) {
    theme = _objectSpread(_objectSpread({}, theme), theme.active);
  }
  if (props.accent) {
    theme = _objectSpread(_objectSpread({}, theme), theme.accent);
  }
  if (props.truncate) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    });
  }
  return {
    cursor: 'default',
    color: theme.color,
    userSelect: 'none',
    width: theme.width,
    display: theme.display,
    textAlign: theme.textAlign,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    lineHeight: theme.lineHeight,
    overflow: theme.overflow,
    whiteSpace: theme.whiteSpace,
    textOverflow: theme.textOverflow
  };
}