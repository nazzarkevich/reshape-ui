"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DropdownSearch = _interopRequireDefault(require("./DropdownSearch.c"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeDropdownSearch = (0, _theme.ThemeHoc)(_DropdownSearch["default"], 'dropdownSearch');
var _default = ThemeDropdownSearch;
exports["default"] = _default;