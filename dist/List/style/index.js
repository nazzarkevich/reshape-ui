"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.List = void 0;

var _utils = require("../../utils");

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var List = (0, _utils.createStyled)('ul')(_templateObject());
exports.List = List;

function _default(theme, props, state) {
  var styles = theme.styles;
  var primaryForeground = styles.primaryForeground;
  var scrollbarBackground = (0, _color["default"])(primaryForeground).alpha(0.1).rgb().string();
  var scrollStyle = {};

  if (window && /WebKit/i.test(window.navigator.userAgent)) {
    scrollStyle = {
      '&::-webkit-scrollbar': {
        width: styles.gutter - 2 + 'px',
        position: 'absolute'
      },
      '&::-webkit-scrollbar:horizontal': {
        height: styles.gutter / 2
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent'
      },
      '&::-webkit-scrollbar-thumb': {
        background: scrollbarBackground
      },
      '&::-webkit-scrollbar-button, &::-webkit-scrollbar-corner, &::-webkit-resizer': {
        display: 'none'
      }
    };
  }

  return _objectSpread({
    margin: 0,
    marginTop: theme.marginTop,
    top: theme.top,
    right: theme.right,
    bottom: theme.bottom,
    left: theme.left,
    listStyle: 'none',
    width: theme.width,
    zIndex: theme.zIndex,
    display: theme.display,
    overflow: theme.overflow,
    position: theme.position,
    paddingTop: theme.paddingTop,
    paddingRight: theme.paddingRight,
    paddingBottom: theme.paddingBottom,
    paddingLeft: theme.paddingLeft,
    maxHeight: theme.maxHeight,
    background: theme.background,
    borderRadius: theme.borderRadius,
    boxSizing: theme.boxSizing,
    boxShadow: "0px 2px 8px ".concat(styles.primaryShadow),
    transform: theme.transform
  }, scrollStyle);
}