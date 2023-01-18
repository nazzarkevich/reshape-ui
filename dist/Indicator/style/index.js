"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IndicatorWrapper = void 0;
var _utils = require("../../utils");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var IndicatorWrapper = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.IndicatorWrapper = IndicatorWrapper;
var styleSheet = function styleSheet(theme) {
  return {
    display: theme.display,
    cursor: theme.cursor,
    alignItems: theme.alignItems,
    position: theme.position
  };
};
var _default = styleSheet;
exports["default"] = _default;