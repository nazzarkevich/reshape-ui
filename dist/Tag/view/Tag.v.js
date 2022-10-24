"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FRAGMENT_KEY = '6ec9bda9-0676-40d4-8c8d-bc1fc3694d14';
var propTypes = {
  onBlur: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onInput: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onContextMenu: _propTypes["default"].func,
  className: _propTypes["default"].string,
  editable: _propTypes["default"].bool,
  startIcon: _propTypes["default"].node
};

var TagView = function TagView(props) {
  var className = props.className,
      editable = props.editable,
      onClick = props.onClick,
      onInput = props.onInput,
      onBlur = props.onBlur,
      startIcon = props.startIcon,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      onContextMenu = props.onContextMenu,
      componentStyles = props.componentStyles,
      attributes = props.attributes,
      children = props.children;

  var tagElement = _react["default"].createElement(_style.Tag, _extends({
    onClick: onClick,
    className: className,
    onContextMenu: onContextMenu,
    styles: componentStyles
  }, attributes), startIcon, children);

  if (editable) {
    tagElement = _react["default"].createElement(_react.Fragment, {
      key: FRAGMENT_KEY
    }, _react["default"].createElement(_style.Tag, _extends({
      suppressContentEditableWarning: true,
      contentEditable: editable,
      onMouseDown: onMouseDown,
      className: className,
      onKeyDown: onKeyDown,
      onClick: onClick,
      onInput: onInput,
      onBlur: onBlur,
      styles: componentStyles
    }, attributes), startIcon, children));
  }

  return tagElement;
};

TagView.propTypes = propTypes;
var _default = TagView;
exports["default"] = _default;