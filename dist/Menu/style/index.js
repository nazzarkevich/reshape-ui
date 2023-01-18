"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Menu = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Menu = Menu;
function _default(theme, props, state) {
  var styles = theme.styles;
  return {
    menuStyle: {
      width: theme.width,
      display: theme.display,
      boxSizing: theme.boxSizing,
      position: theme.position,
      top: theme.top,
      right: theme.right,
      left: theme.left,
      bottom: theme.bottom
    },
    listStyle: {
      overflow: 'visible',
      maxHeight: 'none'
    },
    iconStyle: {
      marginRight: styles.gutter
    }
  };
}