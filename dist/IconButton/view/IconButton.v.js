"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("../style");

var _Icon = _interopRequireDefault(require("../../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  componentStyles: _propTypes["default"].shape({
    wrapper: _propTypes["default"].shape({}),
    icon: _propTypes["default"].shape({})
  }),
  hoverColor: _propTypes["default"].string,
  className: _propTypes["default"].string,
  iconName: _propTypes["default"].string,
  name: _propTypes["default"].string,
  cursor: _propTypes["default"].string,
  active: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};

var IconButtonView = function IconButtonView(_ref) {
  var componentStyles = _ref.componentStyles,
      hoverColor = _ref.hoverColor,
      className = _ref.className,
      secondary = _ref.secondary,
      iconName = _ref.iconName,
      cursor = _ref.cursor,
      onClick = _ref.onClick,
      name = _ref.name;
  return _react["default"].createElement(_style.Button, {
    styles: componentStyles.wrapper,
    className: className,
    onClick: onClick,
    name: name
  }, _react["default"].createElement(_Icon["default"], {
    style: componentStyles.icon,
    hoverColor: hoverColor,
    secondary: secondary,
    name: iconName,
    cursor: cursor
  }));
};

IconButtonView.propTypes = propTypes;
var _default = IconButtonView;
exports["default"] = _default;