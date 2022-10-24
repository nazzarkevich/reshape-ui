"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tooltip = require("../tooltip.ct");

var _calcAbovePosition = _interopRequireDefault(require("./calcAbovePosition"));

var _calcUnderPosition = _interopRequireDefault(require("./calcUnderPosition"));

var _findTopExceptionPlacement = _interopRequireDefault(require("./findTopExceptionPlacement"));

var _placementVariants;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var placementVariants = (_placementVariants = {}, _defineProperty(_placementVariants, _tooltip.PLACEMENT.TOP, function (payload) {
  return (0, _calcAbovePosition["default"])(payload);
}), _defineProperty(_placementVariants, _tooltip.PLACEMENT.TOP_END, function (payload) {
  return (0, _calcAbovePosition["default"])(payload);
}), _defineProperty(_placementVariants, _tooltip.PLACEMENT.TOP_START, function (payload) {
  return (0, _calcAbovePosition["default"])(payload);
}), _defineProperty(_placementVariants, _tooltip.PLACEMENT.BOTTOM, function (payload) {
  return (0, _calcUnderPosition["default"])(payload);
}), _placementVariants);

var calcTopPosition = function calcTopPosition(rootInfo, tooltipInfo, placement) {
  var rootTop = rootInfo.top,
      rootBottom = rootInfo.bottom;
  var tooltipHeight = tooltipInfo.height;
  var payload = {
    rootTop: rootTop,
    rootBottom: rootBottom,
    tooltipHeight: tooltipHeight
  };
  var topPosition = placementVariants[placement](payload);
  var exceptionPlacement = (0, _findTopExceptionPlacement["default"])({
    topPosition: topPosition,
    tooltipHeight: tooltipHeight
  });

  if (exceptionPlacement) {
    return placementVariants[exceptionPlacement](payload);
  } else {
    return topPosition;
  }
};

var _default = calcTopPosition;
exports["default"] = _default;