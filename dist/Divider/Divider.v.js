"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _color = _interopRequireDefault(require("color"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = _interopRequireDefault(require("../styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DEFAULT_COLOR = (0, _color["default"])(_styles["default"].primaryForeground).alpha(0.05).rgb().string();
var DEFAULT_STYLES = {
  width: '100%',
  height: '1px',
  backgroundColor: DEFAULT_COLOR
};
var propTypes = {
  style: _propTypes["default"].shape({})
};
var Divider = function Divider(props) {
  var style = props.style;
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, props, {
    style: _objectSpread(_objectSpread({}, DEFAULT_STYLES), style)
  }));
};
Divider.propTypes = propTypes;
var _default = Divider;
exports["default"] = _default;