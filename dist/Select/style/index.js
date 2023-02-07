"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Title = void 0;
exports["default"] = _default;
var _utils = require("../../utils");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Wrapper = (0, _utils.createStyled)('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Wrapper = Wrapper;
var Title = (0, _utils.createStyled)('span')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.Title = Title;
function _default(theme, props) {
  var styles = theme.styles;
  return {
    // menuStyle: {
    //     width:     theme.width,
    //     display:   theme.display,
    //     boxSizing: theme.boxSizing,
    //     position:  theme.position,
    //     top:       theme.top,
    //     right:     theme.right,
    //     left:      theme.left,
    //     bottom:    theme.bottom
    // },
    wrapperStyle: {
      position: 'relative'
    },
    titleStyle: {
      display: 'block',
      cursor: 'pointer',
      textAlign: 'center',
      userSelect: 'none',
      color: styles.primary,
      fontSize: styles.textNormal,
      fontFamily: styles.fontFamily,
      lineHeight: styles.lineHeightNormal,
      fontWeight: styles.fontWeightNormal
    },
    listStyle: {
      marginTop: styles.gutter / 2,
      transform: 'translateX(-50%)',
      position: 'absolute',
      overflow: 'visible',
      maxHeight: 'none',
      left: '50%'
    },
    listItemStyle: {
      paddingLeft: styles.gutter / 2,
      paddingRight: styles.gutter / 2
    },
    listItemTextStyle: {
      width: '100%',
      display: 'block'
    }
  };
}