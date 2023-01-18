"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Input = _interopRequireDefault(require("./Input.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemeInput = (0, _theme.ThemeHoc)(_Input["default"], 'input');
var _default = ThemeInput;
exports["default"] = _default;