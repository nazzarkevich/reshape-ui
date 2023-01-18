"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _virtualizedList = require("../virtualizedList.ct");
var getListHeight = function getListHeight(height) {
  return height ? height : _virtualizedList.LIST_HEIGHT;
};
var _default = getListHeight;
exports["default"] = _default;