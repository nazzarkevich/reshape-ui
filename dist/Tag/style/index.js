"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.Tag = void 0;

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

var Tag = (0, _utils.createStyled)('div')(_templateObject());
exports.Tag = Tag;

function _default(theme, props, state) {
  // Important to copy nested object
  if (props.primary) {
    theme = _objectSpread({}, theme, {}, theme.primary);
  }

  if (props.active) {
    theme = _objectSpread({}, theme, {}, theme.active);
  }

  if (props.secondary) {
    theme = _objectSpread({}, theme, {}, theme.secondary);
  }

  if (props.editable) {
    theme = _objectSpread({}, theme, {}, theme.editable);
  }

  if (props.error || state.error) {
    theme = _objectSpread({}, theme, {}, theme.error);
  }

  return {
    display: theme.display,
    padding: theme.padding,
    boxSizing: theme.boxSizing,
    borderWidth: theme.borderWidth,
    borderStyle: theme.borderStyle,
    borderColor: theme.borderColor,
    borderRadius: theme.borderRadius,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    lineHeight: theme.lineHeight,
    textAlign: theme.textAlign,
    color: theme.color,
    cursor: theme.cursor,
    background: theme.background,
    wordBreak: 'break-word',
    outline: 'none' // '&:hover':    {
    //     background:  theme.hoverBackground,
    //     borderColor: theme.hoverBorderColor
    // }

  };
}