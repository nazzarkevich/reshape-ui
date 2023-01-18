"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _List = _interopRequireDefault(require("./List.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemeList = (0, _theme.ThemeHoc)(_List["default"], 'list');
var _default = ThemeList;
exports["default"] = _default;