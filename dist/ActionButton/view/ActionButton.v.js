"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../Icon"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ActionButtonView = function ActionButtonView(_ref) {
  var componentStyles = _ref.componentStyles,
      onMouseLeave = _ref.onMouseLeave,
      onMouseOver = _ref.onMouseOver,
      elementRef = _ref.elementRef,
      className = _ref.className,
      iconName = _ref.iconName,
      children = _ref.children,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      name = _ref.name,
      type = _ref.type,
      id = _ref.id;
  return _react["default"].createElement(_style.Button, {
    id: id,
    name: name,
    type: type,
    onClick: onClick,
    disabled: disabled,
    className: className,
    ref: elementRef,
    styles: componentStyles,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave
  }, _react["default"].createElement(_Icon["default"], {
    name: iconName,
    style: componentStyles.icon
  }));
};

ActionButtonView.propTypes = {
  elementRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].instanceOf(Element)
  })]),
  componentStyles: _propTypes["default"].shape(),
  onMouseLeave: _propTypes["default"].func,
  className: _propTypes["default"].string,
  onMouseOver: _propTypes["default"].func,
  children: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  type: _propTypes["default"].string,
  name: _propTypes["default"].string,
  id: _propTypes["default"].string
};
var _default = ActionButtonView;
exports["default"] = _default;