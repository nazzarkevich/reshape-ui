"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var calcLeftEndPosition = function calcLeftEndPosition(payload) {
  var rootRight = payload.rootRight,
    tooltipWidth = payload.tooltipWidth;
  return rootRight - tooltipWidth;
};
var _default = calcLeftEndPosition;
exports["default"] = _default;