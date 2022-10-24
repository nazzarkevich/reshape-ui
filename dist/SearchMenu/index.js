"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SearchMenu = _interopRequireDefault(require("./SearchMenu.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeMenu = (0, _theme.ThemeHoc)(_SearchMenu["default"], 'searchMenu');
var _default = ThemeMenu;
exports["default"] = _default;