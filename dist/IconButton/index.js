"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _theme = require("../theme");
var _IconButton = _interopRequireDefault(require("./IconButton.c"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = (0, _theme.ThemeHoc)(_IconButton["default"], 'iconButton');
exports["default"] = _default;