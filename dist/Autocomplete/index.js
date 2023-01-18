"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Autocomplete = _interopRequireDefault(require("./Autocomplete.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = (0, _theme.ThemeHoc)(_Autocomplete["default"], 'autocomplete');
exports["default"] = _default;