"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _switchIconButton = require("../switchIconButton.ct");
var _templateObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var IconButton = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.IconButton = IconButton;
function _default(customTheme, props, state) {
  // important to copy basic theme
  var theme = _objectSpread({}, customTheme);
  var status = props.status;
  if (state.hover) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      background: theme.hoverBackground
    });
  }
  if (status === _switchIconButton.ICON_STATUS.ACTIVE) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      background: theme.activeHoverBackground
    });
  }
  if (status === _switchIconButton.ICON_STATUS.APPLIED) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      background: theme.secondaryHoverBackground
    });
  }
  return {
    wrapper: {
      padding: theme.padding,
      display: theme.display,
      boxSizing: theme.boxSizing,
      background: theme.background
    }
  };
}