"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _Input = _interopRequireDefault(require("../Input"));

var _Autocomplete = _interopRequireDefault(require("../Autocomplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  value: _propTypes["default"].string,
  selectedId: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  showDropdown: _propTypes["default"].bool,
  disableDropdown: _propTypes["default"].bool,
  styles: _propTypes["default"].shape({}),
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })).isRequired,
  onInputKeyDown: _propTypes["default"].func,
  onInputFocus: _propTypes["default"].func,
  onInputBlur: _propTypes["default"].func,
  onInputChange: _propTypes["default"].func,
  onDropdownChange: _propTypes["default"].func
};

var InputDropdown = function InputDropdown(props) {
  var styles = props.styles,
      value = props.value,
      error = props.error,
      options = props.options,
      secondary = props.secondary,
      selectedId = props.selectedId,
      placeholder = props.placeholder,
      showDropdown = props.showDropdown,
      disableDropdown = props.disableDropdown,
      onInputChange = props.onInputChange,
      onInputKeyDown = props.onInputKeyDown,
      onInputFocus = props.onInputFocus,
      onInputBlur = props.onInputBlur,
      onDropdownChange = props.onDropdownChange;
  return _react["default"].createElement(_style.Wrapper, {
    styles: styles.wrapper
  }, _react["default"].createElement(_Input["default"], {
    onKeyDown: onInputKeyDown,
    placeholder: placeholder,
    onChange: onInputChange,
    onFocus: onInputFocus,
    onBlur: onInputBlur,
    secondary: secondary,
    error: error,
    value: value
  }), showDropdown ? _react["default"].createElement(_Autocomplete["default"], {
    onChange: onDropdownChange,
    disabled: disableDropdown,
    style: styles.dropdown,
    secondary: secondary,
    placeholder: "+",
    title: "+",
    value: selectedId,
    options: options
  }) : null);
};

InputDropdown.propTypes = propTypes;
var _default = InputDropdown;
exports["default"] = _default;