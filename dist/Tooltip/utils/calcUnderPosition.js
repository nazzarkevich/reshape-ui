"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tooltip = require("../tooltip.ct");
var calcUnderPosition = function calcUnderPosition(payload) {
  var rootBottom = payload.rootBottom;
  return rootBottom + _tooltip.INDENT;
};
var _default = calcUnderPosition;
exports["default"] = _default;