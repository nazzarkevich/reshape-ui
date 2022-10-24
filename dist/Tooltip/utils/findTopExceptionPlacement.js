"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tooltip = require("../tooltip.ct");

var findTopExceptionPlacement = function findTopExceptionPlacement(tooltipInfo) {
  var topPosition = tooltipInfo.topPosition,
      tooltipHeight = tooltipInfo.tooltipHeight;
  var bottomPosition = topPosition + tooltipHeight;
  var windowHeight = window.innerHeight;
  var placement = null;

  if (topPosition <= 0) {
    placement = _tooltip.PLACEMENT.BOTTOM;
  }

  if (bottomPosition >= windowHeight) {
    placement = _tooltip.PLACEMENT.TOP;
  }

  return placement;
};

var _default = findTopExceptionPlacement;
exports["default"] = _default;