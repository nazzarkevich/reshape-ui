"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var isNumber = function isNumber(str) {
  return _constants.REG_EXP.ONLY_NUMBERS.test(str);
};

var _default = isNumber;
exports["default"] = _default;