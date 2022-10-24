"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _Autocomplete = _interopRequireDefault(require("../Autocomplete"));

var _Select = _interopRequireDefault(require("../Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  onUnitChange: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].string,
  unitValue: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  styles: _propTypes["default"].shape({}),
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })),
  units: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  }))
};

var UnitInputView = function UnitInputView(props) {
  var error = props.error,
      value = props.value,
      unitValue = props.unitValue,
      styles = props.styles,
      units = props.units,
      options = props.options,
      onChange = props.onChange,
      secondary = props.secondary,
      placeholder = props.placeholder,
      onUnitChange = props.onUnitChange;
  return _react["default"].createElement(_style.Wrapper, {
    styles: styles.wrapper
  }, _react["default"].createElement(_Autocomplete["default"], {
    placeholder: placeholder,
    style: styles.dropdown,
    secondary: secondary,
    onChange: onChange,
    title: placeholder,
    options: options,
    value: value,
    freeSolo: true
  }), _react["default"].createElement(_Select["default"], {
    options: units,
    value: unitValue,
    onChange: onUnitChange
  }));
};

UnitInputView.propTypes = propTypes;
var _default = UnitInputView;
exports["default"] = _default;