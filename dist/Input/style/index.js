"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
exports["default"] = _default;
var _utils = require("../../utils/");
var _templateObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Input = (0, _utils.createStyled)('input')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Input = Input;
function _default(customTheme, props, state) {
  var theme = _objectSpread({}, customTheme);
  theme = _objectSpread(_objectSpread({}, theme), {}, {
    color: theme.idleColor,
    placeholder: theme.idlePlaceholder,
    borderStyle: theme.idleBorderStyle,
    background: theme.idleBackground,
    boxShadow: theme.idleBoxShadow,
    outline: theme.idleOutline
  });
  if (props.secondary) {
    theme = _objectSpread(_objectSpread({}, theme), theme.secondary);
  }
  if (props.medium) {
    theme = _objectSpread(_objectSpread({}, theme), theme.medium);
  }
  if (props.truncate) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    });
  }
  if (props.error || state.error) {
    theme = _objectSpread(_objectSpread({}, theme), theme.error);
  }
  return {
    width: theme.width,
    height: theme.height,
    display: theme.display,
    marginLeft: theme.marginLeft,
    marginRight: theme.marginRight,
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
    flexGrow: theme.flexGrow,
    background: theme.background,
    outline: theme.outline,
    whiteSpace: theme.whiteSpace,
    overflow: theme.overflow,
    textOverflow: theme.textOverflow,
    '&::placeholder': {
      color: theme.placeholder
    },
    // '&:hover::placeholder': {
    //     color: theme.hoverPlaceholderColor
    // },

    '&:focus': {
      outline: '0 none'
    }
  };
}