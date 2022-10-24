"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Markers = _interopRequireDefault(require("./Markers.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _theme.ThemeHoc)(_Markers["default"], 'markers');

exports["default"] = _default;