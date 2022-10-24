"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var disabledTheme = function disabledTheme(styles) {
  var disabledColor = (0, _color["default"])(styles.primaryForeground).alpha(styles.primaryOpacity).rgb().string();
  return {
    color: disabledColor
  };
};

var _default = disabledTheme;
exports["default"] = _default;