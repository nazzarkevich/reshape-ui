"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.List = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject, _templateObject2;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var List = (0, _utils.createStyled)('ul')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.List = List;
var Menu = (0, _utils.createStyled)('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.Menu = Menu;
function _default(theme) {
  var styles = theme.styles;
  var listStyle = {
    position: 'absolute',
    overflow: 'visible',
    maxHeight: 'none'
  };
  return {
    menuStyle: {
      display: 'inline-flex',
      position: theme.position,
      width: theme.width,
      left: theme.left,
      top: theme.top
    },
    inputStyle: {
      paddingLeft: styles.gutter * 1.5,
      paddingRight: styles.gutter * 1.5
    },
    listStyle: _objectSpread({}, listStyle),
    mainListStyle: _objectSpread(_objectSpread({}, listStyle), {}, {
      top: "calc(100% + ".concat(styles.gutter, "px)")
    }),
    searchListStyle: _objectSpread(_objectSpread({}, listStyle), {}, {
      maxHeight: styles.gutter * 35,
      overflow: 'auto'
    }),
    iconStyle: {
      marginRight: styles.gutter
    },
    arrowStyle: {
      position: 'absolute',
      right: styles.gutter
    }
  };
}