"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Text = (0, _utils.createStyled)('span')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Text = Text;
function _default(customTheme, props) {
  var theme = _objectSpread({}, customTheme);
  if (props.editable) {
    theme = _objectSpread(_objectSpread({}, theme), theme.editable);
  }
  if (props.error) {
    theme = _objectSpread(_objectSpread({}, theme), theme.error);
  }
  if (props.disabled) {
    theme = _objectSpread(_objectSpread({}, theme), theme.disabled);
  }
  return {
    display: theme.display,
    padding: theme.padding,
    boxSizing: theme.boxSizing,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    lineHeight: theme.lineHeight,
    textAlign: theme.textAlign,
    color: theme.color,
    cursor: theme.cursor,
    background: theme.background,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    wordBreak: 'break-word',
    outline: 'none',
    '&:hover': {
      background: theme.hoverBackground,
      borderColor: theme.hoverBorderColor
    }
  };
}