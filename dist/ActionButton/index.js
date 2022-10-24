"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ActionButton = _interopRequireDefault(require("./ActionButton.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _theme.ThemeHoc)(_ActionButton["default"], 'actionButton');

exports["default"] = _default;