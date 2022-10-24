"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var disabledTheme = function disabledTheme(styles) {
  var primaryForeground = styles.primaryForeground,
      primaryOpacity = styles.primaryOpacity;
  var foregroundColor = (0, _color["default"])(primaryForeground).alpha(primaryOpacity).rgb().string();
  return {
    fill: foregroundColor
  };
};

var _default = disabledTheme;
exports["default"] = _default;