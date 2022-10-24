"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _NestedMenu = _interopRequireDefault(require("./NestedMenu.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeMenu = (0, _theme.ThemeHoc)(_NestedMenu["default"], 'searchMenu');
var _default = ThemeMenu;
exports["default"] = _default;