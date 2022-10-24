"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var primaryTheme = function primaryTheme(styles) {
  var backgroundColor = (0, _color["default"])(styles.primary).alpha(styles.secondaryOpacity).rgb().string();
  return {
    background: backgroundColor
  };
};

var _default = primaryTheme;
exports["default"] = _default;