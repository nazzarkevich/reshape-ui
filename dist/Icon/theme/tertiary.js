"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var tertiaryTheme = function tertiaryTheme(styles) {
  return {
    fill: styles.tertiary
  };
}; // TODO remove after refactoring - disabled state
// const tertiaryTheme = styles => {
//     const { primaryForeground, secondaryOpacity } = styles;
//
//     const foregroundColor = color(primaryForeground)
//         .alpha(secondaryOpacity)
//         .rgb()
//         .string();
//
//     return {
//         fill: foregroundColor
//     }
// };


var _default = tertiaryTheme;
exports["default"] = _default;