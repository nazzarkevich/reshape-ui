"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(styles) {
  var accentColor = (0, _color["default"])(styles.primary);
  var backgroundColor = (0, _color["default"])(accentColor).alpha(0.5).rgb().string();
  var borderColor = (0, _color["default"])(accentColor).alpha(0).rgb().string();
  return {
    borderColor: borderColor,
    cursor: 'text',
    color: styles.active,
    background: backgroundColor
  };
}