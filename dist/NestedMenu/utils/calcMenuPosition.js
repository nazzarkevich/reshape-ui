"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var calcMenuPosition = function calcMenuPosition(anchorEl, list) {
  var _anchorEl$getBounding = anchorEl.getBoundingClientRect(),
      left = _anchorEl$getBounding.left,
      top = _anchorEl$getBounding.top;

  var listCoords = list.getBoundingClientRect();
  var _window = window,
      innerHeight = _window.innerHeight;
  var listBottom = top + listCoords.height;

  if (listBottom > innerHeight) {
    return {
      left: left,
      top: top - listCoords.height
    };
  }

  return {
    left: left,
    top: top
  };
};

var _default = calcMenuPosition;
exports["default"] = _default;