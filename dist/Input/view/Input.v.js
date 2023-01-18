"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = require("../style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var propTypes = {
  id: _propTypes["default"].string,
  value: _propTypes["default"].string,
  type: _propTypes["default"].string,
  className: _propTypes["default"].string,
  name: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  autoFocus: _propTypes["default"].bool,
  onKeyDown: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  maxLength: _propTypes["default"].number,
  attributes: _propTypes["default"].shape({}),
  componentStyles: _propTypes["default"].shape({
    input: _propTypes["default"].shape({}),
    wrapper: _propTypes["default"].shape({})
  })
};
var InputView = function InputView(props) {
  var id = props.id,
    type = props.type,
    value = props.value,
    className = props.className,
    name = props.name,
    error = props.error,
    readOnly = props.readOnly,
    disabled = props.disabled,
    onClick = props.onClick,
    onKeyDown = props.onKeyDown,
    onKeyPress = props.onKeyPress,
    onChange = props.onChange,
    autoFocus = props.autoFocus,
    maxLength = props.maxLength,
    componentStyles = props.componentStyles,
    attributes = props.attributes;
  return /*#__PURE__*/_react["default"].createElement(_style.Input, _extends({
    id: id,
    type: type,
    name: name,
    value: value,
    error: error,
    className: className,
    readOnly: readOnly,
    disabled: disabled,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onKeyPress: onKeyPress,
    onChange: onChange,
    autoFocus: autoFocus,
    maxLength: maxLength,
    styles: componentStyles
  }, attributes));
};
InputView.propTypes = propTypes;
var _default = InputView;
exports["default"] = _default;