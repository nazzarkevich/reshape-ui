"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _platform = require("../platform.ct");
/**
 * @returns {string} :: The user's current platform
 */

var getPlatform = function getPlatform() {
  var platform = window.navigator.platform;
  if (_platform.PLATFORMS.MAC_OS.includes(platform)) return _platform.PLATFORM.MAC_OS;
  if (_platform.PLATFORMS.WINDOWS.includes(platform)) return _platform.PLATFORM.WINDOWS;
};
var _default = getPlatform;
exports["default"] = _default;