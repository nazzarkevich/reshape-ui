"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SwitchIconButton = _interopRequireDefault(require("./SwitchIconButton.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeSwitchIconButton = (0, _theme.ThemeHoc)(_SwitchIconButton["default"], 'switchIconButton');
var _default = ThemeSwitchIconButton;
exports["default"] = _default;