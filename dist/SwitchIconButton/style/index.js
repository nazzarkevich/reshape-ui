"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.IconButton = void 0;

var _utils = require("../../utils");

var _switchIconButton = require("../switchIconButton.ct");

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

var IconButton = (0, _utils.createStyled)('div')(_templateObject());
exports.IconButton = IconButton;

function _default(customTheme, props, state) {
  // important to copy basic theme
  var theme = _objectSpread({}, customTheme);

  var status = props.status;

  if (state.hover) {
    theme = _objectSpread({}, theme, {
      background: theme.hoverBackground
    });
  }

  if (status === _switchIconButton.ICON_STATUS.ACTIVE) {
    theme = _objectSpread({}, theme, {
      background: theme.activeHoverBackground
    });
  }

  if (status === _switchIconButton.ICON_STATUS.APPLIED) {
    theme = _objectSpread({}, theme, {
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