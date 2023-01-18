"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tooltip = require("../tooltip.ct");
var calcAbovePosition = function calcAbovePosition(payload) {
  var rootTop = payload.rootTop,
    tooltipHeight = payload.tooltipHeight;
  return rootTop - tooltipHeight - _tooltip.INDENT;
};
var _default = calcAbovePosition;
exports["default"] = _default;