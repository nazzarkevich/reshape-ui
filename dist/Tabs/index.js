"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Tabs = _interopRequireDefault(require("./Tabs"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = (0, _theme.ThemeHoc)(_Tabs["default"], 'tabs');
exports["default"] = _default;