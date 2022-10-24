"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var DEFAULT_VALUE = 0;

var getInitialOptionIndex = function getInitialOptionIndex(props) {
  var value = props.value,
      options = props.options;
  var result = DEFAULT_VALUE;

  if (value) {
    result = options.findIndex(function (option) {
      return option.id === value;
    });
  }

  return result;
};

var _default = getInitialOptionIndex;
exports["default"] = _default;