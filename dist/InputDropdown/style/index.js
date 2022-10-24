"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.Wrapper = void 0;

var _utils = require("../../utils");

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = (0, _utils.createStyled)('div')(_templateObject());
exports.Wrapper = Wrapper;

function _default(theme) {
  var styles = theme.styles;
  return {
    wrapper: {
      width: theme.width,
      display: theme.display,
      position: theme.position,
      alignItems: theme.alignItems
    },
    dropdown: {
      maxHeight: 'auto',
      flexShrink: '2',
      listWidth: 'auto',
      listLeft: -styles.gutter,
      listItemPaddingLeft: styles.gutter,
      listItemPaddingRight: styles.gutter,
      titlePaddingLeft: 0,
      titlePaddingRight: 0
    }
  };
}