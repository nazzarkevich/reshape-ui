"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * @typedef {Object} KeyboardEvent
 * @property {boolean} ctrlKey  :: Indicates whether the ctrl key is being pressed
 */

/**
 * @param   {KeyboardEvent} e :: The occurred keyboard event
 * @returns {boolean}         :: Boolean that indicates whether a given event corresponds to ctrl shortcut
 */
var isCtrl = function isCtrl(_ref) {
  var ctrlKey = _ref.ctrlKey;
  return ctrlKey;
};

var _default = isCtrl;
exports["default"] = _default;