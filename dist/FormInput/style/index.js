"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.FormInput = void 0;

var _utils = require("../../utils/");

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

var FormInput = (0, _utils.createStyled)('input')(_templateObject());
exports.FormInput = FormInput;

function _default(theme, props, state) {
  theme = _objectSpread({}, theme, {
    color: theme.idleColor,
    placeholder: theme.idlePlaceholder,
    borderStyle: theme.idleBorderStyle,
    background: theme.idleBackground,
    boxShadow: theme.idleBoxShadow,
    outline: theme.idleOutline
  });

  if (props.applied) {
    theme = _objectSpread({}, theme, {
      color: theme.appliedColor,
      placeholder: theme.appliedPlaceholder
    });
  }

  if (props.error) {
    theme = _objectSpread({}, theme, {}, theme.error);
  }

  return {
    width: '100%',
    display: theme.display,
    height: theme.height,
    padding: theme.padding,
    paddingTop: theme.paddingTop,
    paddingRight: theme.paddingRight,
    paddingBottom: theme.paddingBottom,
    paddingLeft: theme.paddingLeft,
    boxSizing: theme.boxSizing,
    borderWidth: theme.borderWidth,
    borderStyle: theme.borderStyle,
    borderColor: theme.borderColor,
    borderRadius: theme.borderRadius,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight,
    lineHeight: theme.lineHeight,
    color: theme.color,
    background: theme.background,
    outline: theme.outline,
    '&::placeholder': {
      color: theme.placeholder
    },
    '&:focus': {
      outline: '0 none'
    }
  };
}