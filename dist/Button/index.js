"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("./Button.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _theme.ThemeHoc)(_Button["default"], 'button');

exports["default"] = _default;