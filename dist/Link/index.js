"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Link = _interopRequireDefault(require("./Link.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemeLink = (0, _theme.ThemeHoc)(_Link["default"], 'link');
var _default = ThemeLink;
exports["default"] = _default;