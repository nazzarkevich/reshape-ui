"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IndentWrapper = exports.IndentItem = void 0;
var _utils = require("../../utils");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var IndentItem = (0, _utils.createStyled)('span')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.IndentItem = IndentItem;
var IndentWrapper = (0, _utils.createStyled)('span')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.IndentWrapper = IndentWrapper;
var styleSheet = function styleSheet(theme) {
  return {
    wrapper: {
      display: theme.display,
      height: theme.height
    },
    indent: {
      display: theme.display,
      width: theme.width,
      height: theme.height
    }
  };
};
var _default = styleSheet;
exports["default"] = _default;