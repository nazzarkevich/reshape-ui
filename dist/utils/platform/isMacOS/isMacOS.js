"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _platform = require("../platform.ct");
/**
 * @param   {string} platform :: The user's current platform
 * @returns {boolean}         :: Boolean that indicates whether a given platform is MacOS
 */

var isMacOS = function isMacOS(platform) {
  return platform === _platform.PLATFORM.MAC_OS;
};
var _default = isMacOS;
exports["default"] = _default;