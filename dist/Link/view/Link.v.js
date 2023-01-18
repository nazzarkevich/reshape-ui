"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = require("../style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var propTypes = {
  href: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  target: _propTypes["default"].string,
  className: _propTypes["default"].string,
  componentStyles: _propTypes["default"].shape({}),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
};
var LinkView = function LinkView(props) {
  var href = props.href,
    target = props.target,
    children = props.children,
    className = props.className,
    onClick = props.onClick,
    componentStyles = props.componentStyles;
  return /*#__PURE__*/_react["default"].createElement(_style.LinkItemText, {
    href: href,
    target: target,
    onClick: onClick,
    className: className,
    styles: componentStyles
  }, children);
};
LinkView.propTypes = propTypes;
var _default = LinkView;
exports["default"] = _default;