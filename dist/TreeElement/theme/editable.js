"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var editableTheme = function editableTheme(styles) {
  var primary = styles.primary,
    primaryOpacity = styles.primaryOpacity;
  var backgroundColor = (0, _color["default"])(primary).alpha(primaryOpacity).rgb().string();
  return {
    color: styles.active,
    iconColor: styles.active,
    background: backgroundColor
  };
};
var _default = editableTheme;
exports["default"] = _default;