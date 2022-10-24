"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _input = require("./input.ct");

var matchInputValue = function matchInputValue(value) {
  if (value === null || value === undefined) return _input.INITIAL_VALUE;
  return value;
};

var _default = matchInputValue;
exports["default"] = _default;