"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Icon = _interopRequireDefault(require("./Icon.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemeIcon = (0, _theme.ThemeHoc)(_Icon["default"], 'icon');
var _default = ThemeIcon;
exports["default"] = _default;