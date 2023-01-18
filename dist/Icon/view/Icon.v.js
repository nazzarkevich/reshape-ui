"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = require("../style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var IconView = function IconView(props) {
  var id = props.id,
    name = props.name,
    onClick = props.onClick,
    onMouseOver = props.onMouseOver,
    onMouseLeave = props.onMouseLeave,
    className = props.className,
    elementRef = props.elementRef,
    componentStyles = props.componentStyles;
  return /*#__PURE__*/_react["default"].createElement(_style.Svg, {
    id: id,
    ref: elementRef,
    onClick: onClick,
    onMouseLeave: onMouseLeave,
    onMouseOver: onMouseOver,
    className: className,
    styles: componentStyles.svg
  }, /*#__PURE__*/_react["default"].createElement("use", {
    xlinkHref: "#".concat(name)
  }));
};
IconView.propTypes = {
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  size: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  active: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  elementRef: _propTypes["default"].func
};
var _default = IconView;
exports["default"] = _default;