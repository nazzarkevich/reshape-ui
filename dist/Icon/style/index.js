"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.Svg = void 0;

var _utils = require("../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Svg = (0, _utils.createStyled)('svg')(_templateObject());
exports.Svg = Svg;

function _default(customTheme, props) {
  var theme = _objectSpread({}, customTheme);

  var _theme = theme,
      styles = _theme.styles;
  var size = props.size,
      rotate = props.rotate,
      hidden = props.hidden;

  if (props.primary) {
    theme = _objectSpread({}, theme, {}, theme.primary);
  }

  if (props.active) {
    theme = _objectSpread({}, theme, {
      fill: styles.active
    });
  }

  if (props.disabled) {
    theme = _objectSpread({}, theme, {}, theme.disabled);
  }

  if (props.secondary) {
    theme = _objectSpread({}, theme, {}, theme.secondary);
  }

  if (props.tertiary) {
    theme = _objectSpread({}, theme, {}, theme.tertiary);
  }

  if (props.error) {
    theme = _objectSpread({}, theme, {}, theme.error);
  }

  if (props.inverse) {
    theme = _objectSpread({}, theme, {}, theme.inverse);
  }

  if (size === 'extra-small') {
    theme = _objectSpread({}, theme, {
      width: 7,
      height: 7
    });
  }

  if (size === 'small') {
    theme = _objectSpread({}, theme, {
      width: styles.gutter * 1.5,
      height: styles.gutter * 1.5
    });
  }

  if (size === 'medium') {
    theme = _objectSpread({}, theme, {
      width: styles.gutter * 3,
      height: styles.gutter * 3
    });
  }

  if (rotate) {
    theme = _objectSpread({}, theme, {
      transform: "rotate(".concat(rotate, "deg)")
    });
  }

  if (hidden) {
    theme = _objectSpread({}, theme, {
      visibility: 'hidden'
    });
  }

  if (props.hoverColor) {
    theme = _objectSpread({}, theme, {
      hoverColor: props.hoverColor
    });
  }

  if (props.cursor) {
    theme = _objectSpread({}, theme, {
      cursor: props.cursor
    });
  } // style object has priority


  if (props.style) {
    theme = _objectSpread({}, theme, {}, props.style);
  }

  return {
    svg: {
      width: theme.width,
      height: theme.height,
      display: theme.display,
      boxSizing: theme.boxSizing,
      verticalAlign: theme.verticalAlign,
      marginRight: theme.marginRight,
      marginTop: theme.marginTop,
      marginBottom: theme.marginBottom,
      marginLeft: theme.marginLeft,
      transform: theme.transform,
      visibility: theme.visibility,
      position: theme.position,
      cursor: theme.cursor,
      top: theme.top,
      right: theme.right,
      bottom: theme.bottom,
      left: theme.left,
      flexShrink: 0,
      'use': {
        fill: theme.fill
      },
      // [`${theme.ref}:hover &`]: {
      //     use: {
      //         fill: theme.hoverColor
      //     }
      // },
      '&:hover': {
        use: {
          fill: theme.hoverColor
        }
      }
    }
  };
}