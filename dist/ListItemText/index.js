"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ListItemText = _interopRequireDefault(require("./ListItemText.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeListItemText = (0, _theme.ThemeHoc)(_ListItemText["default"], 'listItemText');
var _default = ThemeListItemText;
exports["default"] = _default;