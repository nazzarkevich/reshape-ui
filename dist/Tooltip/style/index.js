"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Tooltip = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject, _templateObject2;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Wrapper = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Wrapper = Wrapper;
var Tooltip = (0, _utils.createStyled)('span')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.Tooltip = Tooltip;
function _default(customTheme, props, state) {
  var theme = _objectSpread({}, customTheme);
  return {
    tooltip: {
      padding: theme.tooltip.padding,
      background: theme.tooltip.background,
      borderRadius: theme.tooltip.borderRadius,
      boxShadow: theme.tooltip.boxShadow,
      boxSizing: theme.tooltip.boxSizing,
      color: theme.tooltip.color,
      fontFamily: theme.tooltip.fontFamily,
      fontSize: theme.tooltip.fontSize,
      fontWeight: theme.tooltip.fontWeight,
      lineHeight: theme.tooltip.lineHeight,
      position: theme.tooltip.position,
      zIndex: theme.tooltip.zIndex
    },
    wrapper: {
      display: theme.wrapper.display,
      boxSizing: theme.wrapper.boxSizing
    }
  };
}