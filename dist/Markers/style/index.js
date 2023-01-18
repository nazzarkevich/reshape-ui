"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Marker = exports.Axis = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Wrapper = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Wrapper = Wrapper;
var Axis = (0, _utils.createStyled)('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.Axis = Axis;
var Marker = (0, _utils.createStyled)('span')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
exports.Marker = Marker;
function _default(customTheme, props) {
  var theme = _objectSpread({}, customTheme);
  var mainAxisDegree = 0,
    crossAxisDegree = 90;
  if (props.mainAxisDegree || props.mainAxisDegree === 0) {
    mainAxisDegree = props.mainAxisDegree;
  }
  if (props.crossAxisDegree || props.crossAxisDegree === 0) {
    crossAxisDegree = props.crossAxisDegree;
  }
  var styles = theme.styles;
  var axis = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: "calc(50% - 3.5px)"
  };
  var markerColor = styles.primary;
  if (props.secondary) {
    markerColor = styles.primaryForeground;
  }
  return _objectSpread(_objectSpread({}, theme), {}, {
    width: theme.width,
    height: theme.height,
    color: theme.color,
    position: theme.position,
    boxSizing: theme.boxSizing,
    mainAxis: _objectSpread(_objectSpread({}, axis), {}, {
      zIndex: '2',
      transform: "rotate(".concat(mainAxisDegree, "deg)")
    }),
    crossAxis: _objectSpread(_objectSpread({}, axis), {}, {
      zIndex: '1',
      transform: "rotate(".concat(crossAxisDegree, "deg)")
    }),
    marker: {
      boxSizing: theme.boxSizing,
      backgroundColor: theme.backgroundColor,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.borderColor,
      borderRadius: 10,
      width: 7,
      height: 7,
      '&:hover': {
        borderColor: theme.borderHoverColor
      },
      '&.active': {
        borderColor: markerColor,
        backgroundColor: markerColor
      }
    }
  });
}