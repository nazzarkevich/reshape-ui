"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.Menu = void 0;

var _utils = require("../../utils");

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Menu = (0, _utils.createStyled)('div')(_templateObject());
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