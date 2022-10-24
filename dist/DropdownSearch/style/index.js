"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.DropdownButton = exports.DropdownTitle = exports.DropdownTitleWrapper = exports.DropdownMainWrapper = void 0;

var _utils = require("../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

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

var DropdownMainWrapper = (0, _utils.createStyled)('div')(_templateObject());
exports.DropdownMainWrapper = DropdownMainWrapper;
var DropdownTitleWrapper = (0, _utils.createStyled)('div')(_templateObject2());
exports.DropdownTitleWrapper = DropdownTitleWrapper;
var DropdownTitle = (0, _utils.createStyled)('span')(_templateObject3());
exports.DropdownTitle = DropdownTitle;
var DropdownButton = (0, _utils.createStyled)('span')(_templateObject4());
exports.DropdownButton = DropdownButton;

function _default(customTheme, props, state) {
  var theme = _objectSpread({}, customTheme);

  var _theme = theme,
      styles = _theme.styles;
  theme = _objectSpread({}, theme, {
    titleColor: theme.idleTitleColor,
    inputColor: theme.idleInputColor
  });

  if (state.selectedId) {
    theme = _objectSpread({}, theme, {
      titleColor: theme.primaryTitleColor,
      hoverTitleColor: theme.primaryTitleColor
    });
  }

  if (props.secondary) {
    theme = _objectSpread({}, theme, {
      titleColor: theme.secondaryTitleColor,
      hoverTitleColor: theme.secondaryTitleColor
    });
  }

  if (props.listPosition === 'top') {
    theme = _objectSpread({}, theme, {
      listTop: 'auto',
      listBottom: "calc(100% + ".concat(styles.gutter, "px)")
    });
  }

  return {
    mainWrapper: {
      width: theme.width,
      background: theme.background,
      boxSizing: theme.boxSizing,
      position: theme.position,
      top: theme.top,
      right: theme.right,
      bottom: theme.bottom,
      left: theme.left,
      display: theme.display,
      flexShrink: theme.flexShrink
    },
    titleWrapper: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 2,
      paddingLeft: theme.titleWrapperPaddingLeft,
      paddingRight: theme.titleWrapperPaddingRight,
      position: 'relative',
      boxSizing: 'border-box',
      userSelect: 'none'
    },
    title: {
      color: theme.titleColor,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      lineHeight: theme.lineHeight,
      display: 'block',
      '&:hover': {
        color: theme.hoverTitleColor
      }
    },
    input: {
      // override default input idle color
      idleColor: theme.inputColor
    },
    arrowButton: {
      position: 'absolute',
      top: 0,
      right: styles.gutter,
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      marginRight: styles.gutter
    },
    actionIcon: {
      position: 'absolute',
      right: styles.gutter
    },
    list: {
      width: theme.listWidth,
      left: theme.listLeft,
      position: 'absolute',
      top: theme.listTop,
      bottom: theme.listBottom
    },
    listItem: {
      paddingLeft: theme.listItemPaddingLeft,
      paddingRight: theme.listItemPaddingRight
    }
  };
}