"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMainWrapper = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DropdownMainWrapper = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.DropdownMainWrapper = DropdownMainWrapper;
function _default(customTheme, props) {
  var theme = _objectSpread({}, customTheme);
  var _theme = theme,
    styles = _theme.styles;
  theme = _objectSpread(_objectSpread({}, theme), {}, {
    inputColor: theme.idleInputColor
  });
  if (props.listPosition === 'top') {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      listTop: 'auto',
      listBottom: "calc(100% + ".concat(styles.gutter, "px)")
    });
  }
  return {
    mainWrapper: {
      width: theme.width,
      background: theme.background,
      boxSizing: theme.boxSizing,
      position: theme.position,
      top: theme.top,
      right: theme.right,
      bottom: theme.bottom,
      left: theme.left,
      display: theme.display,
      flexShrink: theme.flexShrink
    },
    arrowButton: {
      position: 'absolute',
      top: 0,
      right: styles.gutter,
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      marginRight: styles.gutter
    },
    actionIcon: {
      position: 'absolute',
      right: styles.gutter
    },
    list: {
      width: theme.listWidth,
      left: theme.listLeft,
      position: 'absolute',
      top: theme.listTop,
      bottom: theme.listBottom,
      maxHeight: theme.maxHeight
    },
    listItem: {
      paddingLeft: theme.listItemPaddingLeft,
      paddingRight: theme.listItemPaddingRight
    }
  };
}