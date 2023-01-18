"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Select = _interopRequireDefault(require("./Select.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemeMenu = (0, _theme.ThemeHoc)(_Select["default"], 'select');
var _default = ThemeMenu;
exports["default"] = _default;