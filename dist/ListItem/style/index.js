"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ListItem = (0, _utils.createStyled)('li')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.ListItem = ListItem;
function _default(customTheme, props) {
  var theme = _objectSpread({}, customTheme);
  if (props.hover) {
    theme = _objectSpread(_objectSpread({}, theme), theme.hover);
  }
  return {
    margin: 0,
    boxSizing: theme.boxSizing,
    display: theme.display,
    position: theme.position,
    left: theme.left,
    right: theme.right,
    top: theme.top,
    bottom: theme.bottom,
    width: theme.width,
    height: theme.height,
    alignItems: theme.alignItems,
    paddingTop: theme.paddingTop,
    paddingRight: theme.paddingRight,
    paddingBottom: theme.paddingBottom,
    paddingLeft: theme.paddingLeft,
    background: theme.background,
    overflow: theme.overflow,
    '&:hover': {
      background: theme.hoverBackground
    }
  };
}