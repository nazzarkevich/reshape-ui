"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var result = {};

var findRecursivelyOptionsById = function findRecursivelyOptionsById(options, id) {
  options.forEach(function (option, index) {
    if (option.id === id) {
      result = {
        options: options,
        optionIndex: index
      };
      return result;
    }

    if (option.sublist && option.sublist.find(function (option) {
      return option.id === id;
    })) {
      result = {
        options: options,
        optionIndex: index
      };
      return result;
    } else if (option.sublist) {
      result = findRecursivelyOptionsById(option.sublist, id);
    }
  });
  return result;
};

var _default = findRecursivelyOptionsById;
exports["default"] = _default;