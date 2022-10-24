"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NodeWrapper = exports.Span = void 0;

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

var Span = (0, _utils.createStyled)('span')(_templateObject());
exports.Span = Span;
var NodeWrapper = (0, _utils.createStyled)('div')(_templateObject2());
exports.NodeWrapper = NodeWrapper;

var styleSheet = function styleSheet(defaultTheme, props) {
  var theme = _objectSpread({}, defaultTheme);

  var _theme = theme,
      styles = _theme.styles;
  var hovered = props.hovered,
      primary = props.primary,
      secondary = props.secondary,
      disabled = props.disabled;

  if (primary) {
    theme = _objectSpread({}, theme, {}, theme.primary);
  }

  if (secondary) {
    theme = _objectSpread({}, theme, {}, theme.secondary);
  }

  if (disabled) {
    theme = _objectSpread({}, theme, {}, theme.disabled);
  }

  if (hovered) {
    theme = _objectSpread({}, theme, {
      borderColor: theme.hoverBorderColor
    });
  }

  return {
    node: {
      display: theme.display,
      alignItems: theme.alignItems,
      width: theme.width,
      height: theme.height,
      minHeight: theme.minHeight,
      background: theme.background,
      padding: theme.padding,
      boxSizing: theme.boxSizing,
      borderWidth: theme.borderWidth,
      borderStyle: theme.borderStyle,
      borderColor: theme.borderColor,
      borderRadius: theme.borderRadius,
      position: theme.position,
      userSelect: 'none',
      outline: 'none',
      whiteSpace: 'nowrap',
      fontSize: theme.fontSize,
      fontFamily: theme.fontFamily,
      lineHeight: theme.lineHeight
    },
    title: {
      marginLeft: styles.gutter,
      color: styles.primary
    },
    label: {
      marginLeft: styles.gutter,
      color: theme.color
    },
    contentWrapper: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },
    content: {
      marginLeft: styles.gutter,
      color: theme.contentColor // toggleButton: {
      //     fill: theme.iconColor
      // },
      // elementIcon:  {
      //     fill:       theme.iconColor,
      //     marginLeft: theme.elementIconMarginLeft
      // },
      // endIcon:     {
      //     fill:     theme.iconColor,
      //     position: 'absolute',
      //     right:    styles.gutter
      // },

    }
  };
};

var _default = styleSheet;
exports["default"] = _default;