"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../../utils");

var matchInputValue = function matchInputValue(value) {
  var result = '';

  if ((0, _utils.isValid)(value)) {
    result = value;
  }

  return result;
};

var _default = matchInputValue;
exports["default"] = _default;