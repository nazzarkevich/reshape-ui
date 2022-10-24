"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var sortByIds = function sortByIds(array, ids) {
  if (ids.length) {
    return [].concat(_toConsumableArray(array.filter(function (_ref) {
      var id = _ref.id;
      return ids.includes(id);
    })), _toConsumableArray(array.filter(function (_ref2) {
      var id = _ref2.id;
      return !ids.includes(id);
    })));
  }

  return array;
};

var _default = sortByIds;
exports["default"] = _default;