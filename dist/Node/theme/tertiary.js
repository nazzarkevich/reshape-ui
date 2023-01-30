"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var tertiaryTheme = function tertiaryTheme(styles) {
  var selectedChildren = (0, _color["default"])(styles.primary).alpha(.05).string();
  return {
    background: 'rgba(128,128,255,.05)',
    borderColor: selectedChildren
  };
};
var _default = tertiaryTheme;
exports["default"] = _default;