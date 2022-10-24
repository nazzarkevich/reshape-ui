"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.ListItem = void 0;

var _utils = require("../../utils");

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

var ListItem = (0, _utils.createStyled)('li')(_templateObject());
exports.ListItem = ListItem;

function _default(customTheme, props) {
  var theme = _objectSpread({}, customTheme);

  if (props.hover) {
    theme = _objectSpread({}, theme, {}, theme.hover);
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