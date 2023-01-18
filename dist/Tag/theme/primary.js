"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _default(styles) {
  var backgroundColor = (0, _color["default"])(styles.primary).alpha(styles.tertiaryOpacity).rgb().string();
  var hoverBackgroundColor = (0, _color["default"])(styles.primary).alpha(styles.primaryOpacity).rgb().string();
  return {
    background: backgroundColor,
    hoverBackground: hoverBackgroundColor
  };
}