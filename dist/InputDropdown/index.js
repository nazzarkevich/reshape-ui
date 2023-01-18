"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _InputDropdown = _interopRequireDefault(require("./InputDropdown.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemeInput = (0, _theme.ThemeHoc)(_InputDropdown["default"], 'inputDropdown');
var _default = ThemeInput;
exports["default"] = _default;