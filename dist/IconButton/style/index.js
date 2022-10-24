"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports["default"] = void 0;

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

var Button = (0, _utils.createStyled)('div')(_templateObject());
exports.Button = Button;

var styleSheet = function styleSheet(customTheme, props) {
  var theme = _objectSpread({}, customTheme);

  if (props.active) {
    theme = _objectSpread({}, theme, {}, theme.active);
  }

  if (props.primary) {
    theme = _objectSpread({}, theme, {
      idleIconColor: theme.styles.primary,
      hoverIconColor: theme.styles.primary
    });
  }

  return {
    wrapper: {
      width: theme.width,
      height: theme.height,
      boxSizing: theme.boxSizing,
      display: theme.display,
      alignItems: theme.alignItems,
      justifyContent: theme.justifyContent,
      borderRadius: theme.borderRadius,
      background: theme.background,
      '&:hover': {
        background: theme.hoverBackground
      }
    },
    icon: {
      // ref:        Button,
      fill: theme.idleIconColor,
      hoverColor: theme.hoverIconColor
    }
  };
};

var _default = styleSheet;
exports["default"] = _default;