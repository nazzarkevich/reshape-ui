"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Taken from
 * https://github.com/facebook/react/blob/37e4329bc81def4695211d6e3795a654ef4d84f5/packages/react-dom/src/shared/CSSProperty.js
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
function setUnitsToPx(styles) {
  var nextStyles = _objectSpread({}, styles);
  Object.keys(nextStyles).forEach(function (name) {
    var value = nextStyles[name];

    /**
     * Taken from
     * https://github.com/facebook/react/blob/37e4329bc81def4695211d6e3795a654ef4d84f5/packages/react-dom/src/shared/dangerousStyleValue.js
     */
    if (typeof value === 'number' && value !== 0 && !({}.hasOwnProperty.call(isUnitlessNumber, name) && isUnitlessNumber[name])) {
      nextStyles[name] = "".concat(value, "px");
    }
  });
  return nextStyles;
}
// return function with props, like element(props)
var createStyled = function createStyled(element) {
  return function () {
    for (var _len = arguments.length, styledProps = new Array(_len), _key = 0; _key < _len; _key++) {
      styledProps[_key] = arguments[_key];
    }
    return _styledComponents["default"][element].withConfig({
      displayName: "createStyled",
      componentId: "sc-16ma452-0"
    }).apply(void 0, styledProps.concat([function (props) {
      return setUnitsToPx(props.styles);
    }]));
  };
};
var _default = createStyled;
exports["default"] = _default;