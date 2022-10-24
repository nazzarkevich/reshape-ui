"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  var tooltipStyles = _objectSpread({}, componentStyles.tooltip, {}, tooltipPosition);

  var tooltipElement = null;

  if (show) {
    tooltipElement = _reactDom["default"].createPortal(_react["default"].createElement(_style.Tooltip, {
      role: "tooltip",
      className: "tooltip",
      ref: setTooltipRef,
      styles: tooltipStyles
    }, title), document.body);
  }

  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_style.Wrapper, {
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