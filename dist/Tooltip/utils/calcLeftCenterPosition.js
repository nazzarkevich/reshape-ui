"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var calcLeftCenterPosition = function calcLeftCenterPosition(payload) {
  var rootLeft = payload.rootLeft,
    rootWidth = payload.rootWidth,
    tooltipWidth = payload.tooltipWidth;
  return rootLeft + rootWidth / 2 - tooltipWidth / 2;
};
var _default = calcLeftCenterPosition;
exports["default"] = _default;