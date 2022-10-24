"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.Tooltip = exports.Wrapper = void 0;

var _utils = require("../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = (0, _utils.createStyled)('div')(_templateObject());
exports.Wrapper = Wrapper;
var Tooltip = (0, _utils.createStyled)('span')(_templateObject2());
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