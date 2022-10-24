"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.Title = exports.Wrapper = void 0;

var _utils = require("../../utils");

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

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
var Title = (0, _utils.createStyled)('span')(_templateObject2());
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
      width: theme.width,
      position: 'relative'
    },
    titleStyle: {
      display: 'block',
      cursor: 'pointer',
      textAlign: 'center',
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
      display: 'block',
      textAlign: 'center'
    }
  };
}