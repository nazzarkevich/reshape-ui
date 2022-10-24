"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _platform = require("../platform.ct");

/**
 * @param   {string} platform :: The user's current platform
 * @returns {boolean}         :: Boolean that indicates whether a given platform is Windows
 */
var isWindows = function isWindows(platform) {
  return platform === _platform.PLATFORM.WINDOWS;
};

var _default = isWindows;
exports["default"] = _default;