"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(styles) {
  var primary = styles.primary,
      primaryForeground = styles.primaryForeground,
      primaryOpacity = styles.primaryOpacity;
  var borderColor = (0, _color["default"])(primaryForeground).alpha(primaryOpacity).rgb().string();
  return {
    color: primaryForeground,
    borderColor: borderColor,
    hoverBorderColor: primary
  };
}