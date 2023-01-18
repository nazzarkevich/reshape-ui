"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = exports.ElementText = exports.Element = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Element = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Element = Element;
var ElementText = (0, _utils.createStyled)('span')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.ElementText = ElementText;
var IconWrapper = (0, _utils.createStyled)('div')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
exports.IconWrapper = IconWrapper;
function _default(customTheme, props, state) {
  var theme = _objectSpread({}, customTheme);
  var _theme = theme,
    styles = _theme.styles;
  var active = props.active,
    primary = props.primary,
    secondary = props.secondary,
    editable = props.editable,
    disabled = props.disabled;
  if (state.hover) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      borderTopColor: theme.hoverBorderColor,
      borderRightColor: theme.hoverBorderColor,
      borderBottomColor: theme.hoverBorderColor,
      borderLeftColor: theme.hoverBorderColor
    });
  }
  if (props.statusIconName) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      paddingRight: styles.gutter * 4
    });
  }
  if (active) {
    theme = _objectSpread(_objectSpread({}, theme), theme.active);
  }
  if (primary) {
    theme = _objectSpread(_objectSpread({}, theme), theme.primary);
  }
  if (secondary) {
    theme = _objectSpread(_objectSpread({}, theme), theme.secondary);
  }
  if (editable) {
    theme = _objectSpread(_objectSpread({}, theme), theme.editable);
  }
  if (disabled) {
    theme = _objectSpread(_objectSpread({}, theme), theme.disabled);
  }
  var iconWrapper = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute'
  };
  return {
    element: {
      display: theme.display,
      alignItems: theme.alignItems,
      width: theme.width,
      height: theme.height,
      minHeight: theme.minHeight,
      background: theme.background,
      paddingLeft: theme.paddingLeft,
      paddingRight: theme.paddingRight,
      paddingTop: theme.paddingTop,
      paddingBottom: theme.paddingBottom,
      boxSizing: theme.boxSizing,
      borderWidth: theme.borderWidth,
      borderStyle: theme.borderStyle,
      borderRadius: theme.borderRadius,
      borderTopColor: theme.borderTopColor,
      borderRightColor: theme.borderRightColor,
      borderBottomColor: theme.borderBottomColor,
      borderLeftColor: theme.borderLeftColor,
      position: theme.position,
      userSelect: 'none'
    },
    toggleButton: {
      fill: theme.iconColor,
      marginRight: styles.gutter
    },
    elementIcon: {
      fill: theme.iconColor,
      marginRight: styles.gutter
    },
    statusIconWrapper: _objectSpread(_objectSpread({}, iconWrapper), {}, {
      right: styles.gutter / 2
    }),
    actionIconWrapper: _objectSpread(_objectSpread({}, iconWrapper), {}, {
      right: styles.gutter * 3 + styles.gutter / 2
    }),
    statusIcon: {
      fill: theme.iconColor
    },
    elementText: {
      color: theme.color,
      fontSize: theme.fontSize,
      fontFamily: theme.fontFamily,
      lineHeight: theme.lineHeight,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },
    input: {
      width: 'auto',
      idleColor: styles.active,
      idlePlaceholder: styles.active,
      flexGrow: 1
    }
  };
}