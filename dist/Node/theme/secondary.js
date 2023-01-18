"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var secondaryTheme = function secondaryTheme(styles) {
  return {
    color: styles.active,
    iconColor: styles.active,
    background: styles.secondary,
    borderColor: styles.secondary
  };
};
var _default = secondaryTheme;
exports["default"] = _default;