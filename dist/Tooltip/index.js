"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Tooltip = _interopRequireDefault(require("./Tooltip.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemeTooltip = (0, _theme.ThemeHoc)(_Tooltip["default"], 'tooltip');
var _default = ThemeTooltip;
exports["default"] = _default;