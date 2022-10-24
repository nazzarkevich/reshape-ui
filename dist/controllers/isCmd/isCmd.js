"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * @typedef {Object} KeyboardEvent
 * @property {boolean} metaKey  :: Indicates whether the cmd key is being pressed
 */

/**
 * @param   {KeyboardEvent} e :: The occurred keyboard event
 * @returns {boolean}         :: Boolean that indicates whether a given event corresponds to cmd+v shortcut
 */
var isCmd = function isCmd(_ref) {
  var metaKey = _ref.metaKey;
  return metaKey;
};

var _default = isCmd;
exports["default"] = _default;