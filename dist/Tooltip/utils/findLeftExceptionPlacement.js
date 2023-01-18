"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tooltip = require("../tooltip.ct");
var findLeftExceptionPlacement = function findLeftExceptionPlacement(tooltipInfo) {
  var leftPosition = tooltipInfo.leftPosition,
    tooltipWidth = tooltipInfo.tooltipWidth;
  var rightPosition = leftPosition + tooltipWidth;
  var windowWidth = window.innerWidth;
  var rightDistance = windowWidth - rightPosition;
  var placement = null;
  if (rightDistance <= _tooltip.VIEWPORT_SPACE) {
    placement = _tooltip.PLACEMENT.TOP_END;
  }
  if (leftPosition <= 0) {
    placement = _tooltip.PLACEMENT.TOP_START;
  }
  return placement;
};
var _default = findLeftExceptionPlacement;
exports["default"] = _default;