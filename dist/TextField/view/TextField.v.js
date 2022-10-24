"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("../style");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propTypes = {
  id: _propTypes["default"].string,
  value: _propTypes["default"].string,
  className: _propTypes["default"].string,
  editable: _propTypes["default"].bool,
  onBlur: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onInput: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  componentStyles: _propTypes["default"].shape({}),
  attributes: _propTypes["default"].shape({})
};

var TextFieldView = function TextFieldView(props) {
  var value = props.value,
      className = props.className,
      editable = props.editable,
      onClick = props.onClick,
      onInput = props.onInput,
      onBlur = props.onBlur,
      onKeyDown = props.onKeyDown,
      componentStyles = props.componentStyles,
      attributes = props.attributes;

  var textElement = _react["default"].createElement(_style.Text, _extends({
    className: className,
    onClick: onClick,
    styles: componentStyles
  }, attributes), value);

  if (editable) {
    textElement = _react["default"].createElement(_style.Text, _extends({
      dangerouslySetInnerHTML: {
        __html: value
      },
      suppressContentEditableWarning: true,
      contentEditable: editable,
      className: className,
      onInput: onInput,
      onBlur: onBlur,
      onKeyDown: onKeyDown,
      styles: componentStyles
    }, attributes));
  }

  return textElement;
};

TextFieldView.propTypes = propTypes;
var _default = TextFieldView;
exports["default"] = _default;