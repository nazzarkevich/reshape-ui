"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = require("../style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var TooltipView = function TooltipView(props) {
  var id = props.id,
    show = props.show,
    title = props.title,
    children = props.children,
    className = props.className,
    setRootRef = props.setRootRef,
    setTooltipRef = props.setTooltipRef,
    tooltipPosition = props.tooltipPosition,
    onMouseOver = props.onMouseOver,
    onMouseLeave = props.onMouseLeave,
    componentStyles = props.componentStyles;
  var tooltipStyles = _objectSpread(_objectSpread({}, componentStyles.tooltip), tooltipPosition);
  var tooltipElement = null;
  if (show) {
    tooltipElement = /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_style.Tooltip, {
      role: "tooltip",
      className: "tooltip",
      ref: setTooltipRef,
      styles: tooltipStyles
    }, title), document.body);
  }
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_style.Wrapper, {
    id: id,
    ref: setRootRef,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    className: className,
    styles: componentStyles.wrapper
  }, children), tooltipElement);
};
TooltipView.displayName = 'TooltipView';
TooltipView.propTypes = {
  id: _propTypes["default"].string,
  show: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  className: _propTypes["default"].string,
  setRootRef: _propTypes["default"].func,
  setTooltipRef: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  tooltipPosition: _propTypes["default"].shape({
    left: _propTypes["default"].number
  }),
  componentStyles: _propTypes["default"].shape({}),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
var _default = TooltipView;
exports["default"] = _default;