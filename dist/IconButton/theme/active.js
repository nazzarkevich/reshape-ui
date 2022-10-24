"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var activeTheme = function activeTheme(styles) {
  var background = (0, _color["default"])(styles.primaryForeground).alpha(styles.tertiaryOpacity).rgb().string();
  return {
    background: background
  };
};

var _default = activeTheme;
exports["default"] = _default;