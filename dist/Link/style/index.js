"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.LinkItemText = void 0;

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

var LinkItemText = (0, _utils.createStyled)('a')(_templateObject());
exports.LinkItemText = LinkItemText;

function _default(customTheme, props) {
  var theme = _objectSpread({}, customTheme);

  if (props.fullWidth) {
    theme = _objectSpread({}, theme, {
      display: 'block',
      width: '100%'
    });
  }

  if (props.inactive) {
    theme = _objectSpread({}, theme, {}, theme.inactive);
  }

  if (props.active) {
    theme = _objectSpread({}, theme, {}, theme.active);
  }

  if (props.truncate) {
    theme = _objectSpread({}, theme, {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    });
  }

  return {
    userSelect: 'none',
    cursor: theme.cursor,
    width: theme.width,
    display: theme.display,
    color: theme.color,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    lineHeight: theme.lineHeight,
    overflow: theme.overflow,
    whiteSpace: theme.whiteSpace,
    textOverflow: theme.textOverflow,
    textDecoration: theme.textDecoration,
    textAlign: theme.textAlign
  };
}