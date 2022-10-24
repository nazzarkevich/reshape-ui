"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Tag = _interopRequireDefault(require("./Tag.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeTag = (0, _theme.ThemeHoc)(_Tag["default"], 'tag');
var _default = ThemeTag;
exports["default"] = _default;