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
var propTypes = {
  id: _propTypes["default"].string,
  iconColor: _propTypes["default"].string,
  rotate: _propTypes["default"].number,
  status: _propTypes["default"].string,
  hover: _propTypes["default"].bool,
  iconName: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onIconClick: _propTypes["default"].func,
  switchedIconName: _propTypes["default"].string,
  onSwitchedIconClick: _propTypes["default"].func,
  getIconColor: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  isStatusActive: _propTypes["default"].func,
  styles: _propTypes["default"].shape({})
};
var SwitchIconButtonView = function SwitchIconButtonView(props) {
  var id = props.id,
    rotate = props.rotate,
    iconName = props.iconName,
    hover = props.hover,
    status = props.status,
    iconColor = props.iconColor,
    switchedIconName = props.switchedIconName,
    className = props.className,
    onIconClick = props.onIconClick,
    getIconColor = props.getIconColor,
    onMouseOver = props.onMouseOver,
    onMouseLeave = props.onMouseLeave,
    isStatusActive = props.isStatusActive,
    onSwitchedIconClick = props.onSwitchedIconClick,
    styles = props.styles;
  var iconStyle = {
    fill: getIconColor(status)
  };
  if (iconColor) {
    iconStyle = {
      fill: iconColor
    };
  }
  var iconElement = /*#__PURE__*/_react["default"].createElement(_style.IconButton, {
    className: className,
    onClick: onIconClick,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    styles: styles.wrapper
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    id: id,
    rotate: rotate,
    name: iconName,
    style: iconStyle
  }));
  if (hover && isStatusActive(status)) {
    iconElement = /*#__PURE__*/_react["default"].createElement(_style.IconButton, {
      className: className,
      onClick: onSwitchedIconClick,
      onMouseLeave: onMouseLeave,
      onMouseOver: onMouseOver,
      styles: styles.wrapper
    }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      id: id,
      rotate: rotate,
      name: switchedIconName,
      style: iconStyle
    }));
  }
  return iconElement;
};
SwitchIconButtonView.propTypes = propTypes;
var _default = SwitchIconButtonView;
exports["default"] = _default;