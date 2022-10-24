"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.Menu = exports.List = void 0;

var _utils = require("../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var List = (0, _utils.createStyled)('ul')(_templateObject());
exports.List = List;
var Menu = (0, _utils.createStyled)('div')(_templateObject2());
exports.Menu = Menu;

function _default(theme) {
  var styles = theme.styles;
  var listStyle = {
    position: 'absolute',
    overflow: 'visible',
    maxHeight: 'none'
  };
  return {
    menuStyle: {
      display: 'inline-flex',
      position: 'relative'
    },
    inputStyle: {
      paddingLeft: styles.gutter * 1.5,
      paddingRight: styles.gutter * 1.5
    },
    listStyle: _objectSpread({}, listStyle),
    mainListStyle: _objectSpread({}, listStyle, {
      top: "calc(100% + ".concat(styles.gutter, "px)")
    }),
    searchListStyle: _objectSpread({}, listStyle, {
      maxHeight: styles.gutter * 35,
      overflow: 'auto'
    }),
    iconStyle: {
      marginRight: styles.gutter
    },
    arrowStyle: {
      position: 'absolute',
      right: styles.gutter
    }
  };
}