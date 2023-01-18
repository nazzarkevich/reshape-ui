"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styles = _interopRequireDefault(require("../styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var iconSmall = _styles["default"].iconSmall,
  iconMedium = _styles["default"].iconMedium;
var smallIcon = {
  svg: {
    width: iconSmall,
    height: iconSmall,
    viewBox: "0 0 ".concat(iconSmall, " ").concat(iconSmall)
  }
};
var mediumIcon = {
  svg: {
    width: iconMedium,
    height: iconMedium,
    viewBox: "0 0 ".concat(iconMedium, " ").concat(iconMedium)
  }
};
var settings = {
  small: smallIcon,
  medium: mediumIcon
};
var _default = settings;
exports["default"] = _default;