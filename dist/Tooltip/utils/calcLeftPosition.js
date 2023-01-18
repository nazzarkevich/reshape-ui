"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tooltip = require("../tooltip.ct");
var _calcLeftStartPosition = _interopRequireDefault(require("./calcLeftStartPosition"));
var _calcLeftCenterPosition = _interopRequireDefault(require("./calcLeftCenterPosition"));
var _calcLeftEndPosition = _interopRequireDefault(require("./calcLeftEndPosition"));
var _findLeftExceptionPlacement = _interopRequireDefault(require("./findLeftExceptionPlacement"));
var _placementVariants;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var placementVariants = (_placementVariants = {}, _defineProperty(_placementVariants, _tooltip.PLACEMENT.TOP, function (payload) {
  return (0, _calcLeftCenterPosition["default"])(payload);
}), _defineProperty(_placementVariants, _tooltip.PLACEMENT.TOP_START, function (payload) {
  return (0, _calcLeftStartPosition["default"])(payload);
}), _defineProperty(_placementVariants, _tooltip.PLACEMENT.TOP_END, function (payload) {
  return (0, _calcLeftEndPosition["default"])(payload);
}), _defineProperty(_placementVariants, _tooltip.PLACEMENT.BOTTOM, function (payload) {
  return (0, _calcLeftCenterPosition["default"])(payload);
}), _placementVariants);
var calcLeftPosition = function calcLeftPosition(rootInfo, tooltipInfo, placement) {
  var rootLeft = rootInfo.left,
    rootRight = rootInfo.right,
    rootWidth = rootInfo.width;
  var tooltipWidth = tooltipInfo.width;
  var payload = {
    rootLeft: rootLeft,
    rootRight: rootRight,
    rootWidth: rootWidth,
    tooltipWidth: tooltipWidth
  };
  var leftPosition = placementVariants[placement](payload);
  var exceptionPlacement = (0, _findLeftExceptionPlacement["default"])({
    leftPosition: leftPosition,
    tooltipWidth: tooltipWidth
  });
  if (exceptionPlacement) {
    return placementVariants[exceptionPlacement](payload);
  } else {
    return leftPosition;
  }
};
var _default = calcLeftPosition;
exports["default"] = _default;