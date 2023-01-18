"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TextField = _interopRequireDefault(require("./TextField.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemeTag = (0, _theme.ThemeHoc)(_TextField["default"], 'textField');
var _default = ThemeTag;
exports["default"] = _default;