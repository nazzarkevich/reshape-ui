"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(styles) {
  var inactiveColor = (0, _color["default"])(styles.primaryForeground).alpha(0.50).rgb().string();
  return {
    color: inactiveColor
  };
}