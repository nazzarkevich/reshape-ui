"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Wrapper = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Wrapper = Wrapper;
function _default(theme) {
  var styles = theme.styles;
  return {
    wrapper: {
      width: theme.width,
      display: 'flex',
      position: 'relative',
      alignItems: 'center'
    },
    dropdown: {
      cursor: 'pointer',
      display: 'flex',
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