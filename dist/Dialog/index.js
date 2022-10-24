"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dialog = _interopRequireDefault(require("./Dialog.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeDialog = (0, _theme.ThemeHoc)(_Dialog["default"], 'dialog');
var _default = ThemeDialog;
exports["default"] = _default;