"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ThemeHoc;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _themeContext = _interopRequireDefault(require("./themeContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ThemeHoc(ComponentToWrap, componentName) {
  function ThemeComponent(props) {
    return _react["default"].createElement(_themeContext["default"].Consumer, null, function (theme) {
      var componentTheme = componentName ? theme[componentName] : {};
      return _react["default"].createElement(ComponentToWrap, _extends({}, props, {
        theme: _objectSpread({}, componentTheme, {
          styles: theme.styles
        })
      }));
    });
  }

  ThemeComponent.displayName = "Theme(".concat(ComponentToWrap.displayName || 'Component', ")");
  ThemeComponent.propTypes = {
    style: _propTypes["default"].shape({})
  };
  return ThemeComponent;
}