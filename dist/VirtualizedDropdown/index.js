"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _VirtualizedDropdown = _interopRequireDefault(require("./VirtualizedDropdown.c"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ThemedVirtualizedDropdown = (0, _theme.ThemeHoc)(_VirtualizedDropdown["default"], 'dropdownSearch');
var _default = ThemedVirtualizedDropdown;
exports["default"] = _default;