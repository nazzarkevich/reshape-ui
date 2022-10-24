"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getPlatform", {
  enumerable: true,
  get: function get() {
    return _getPlatform["default"];
  }
});
Object.defineProperty(exports, "isWindows", {
  enumerable: true,
  get: function get() {
    return _isWindows["default"];
  }
});
Object.defineProperty(exports, "isMacOS", {
  enumerable: true,
  get: function get() {
    return _isMacOS["default"];
  }
});

var _getPlatform = _interopRequireDefault(require("./getPlatform"));

var _isWindows = _interopRequireDefault(require("./isWindows"));

var _isMacOS = _interopRequireDefault(require("./isMacOS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }