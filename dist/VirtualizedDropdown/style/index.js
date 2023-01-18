"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownTitleWrapper = exports.DropdownTitle = exports.DropdownMainWrapper = exports.DropdownButton = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DropdownMainWrapper = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.DropdownMainWrapper = DropdownMainWrapper;
var DropdownTitleWrapper = (0, _utils.createStyled)('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.DropdownTitleWrapper = DropdownTitleWrapper;
var DropdownTitle = (0, _utils.createStyled)('span')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
exports.DropdownTitle = DropdownTitle;
var DropdownButton = (0, _utils.createStyled)('span')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
exports.DropdownButton = DropdownButton;
function _default(customTheme, props, state) {
  var theme = _objectSpread({}, customTheme);
  var _theme = theme,
    styles = _theme.styles;
  theme = _objectSpread(_objectSpread({}, theme), {}, {
    titleColor: theme.idleTitleColor,
    inputColor: theme.idleInputColor
  });
  if (state.selectedId) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      titleColor: theme.primaryTitleColor,
      hoverTitleColor: theme.primaryTitleColor
    });
  }
  if (props.applied) {
    theme = _objectSpread(_objectSpread({}, theme), {}, {
      titleColor: theme.secondaryTitleColor
    });
  }
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
      display: theme.display
    },
    titleWrapper: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 2,
      paddingLeft: styles.gutter,
      paddingRight: styles.gutter,
      position: 'relative',
      boxSizing: 'border-box',
      userSelect: 'none'
    },
    title: {
      color: theme.titleColor,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      lineHeight: theme.lineHeight,
      display: 'block',
      width: 'calc(100% - 12px)',
      '&:hover': {
        color: theme.hoverTitleColor
      },
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    input: {
      // override default input idle color
      idleColor: theme.inputColor,
      paddingRight: styles.gutter * 2
    },
    arrowButton: {
      position: 'absolute',
      top: 0,
      right: styles.gutter,
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    list: {
      top: theme.listTop,
      bottom: theme.listBottom,
      position: 'absolute'
    },
    icon: {
      position: 'absolute',
      right: styles.gutter
    }
  };
}