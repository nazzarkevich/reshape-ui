"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _theme = require("../theme");

var _FormInput = _interopRequireDefault(require("./FormInput.c"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _theme.ThemeHoc)(_FormInput["default"], 'formInput');

exports["default"] = _default;