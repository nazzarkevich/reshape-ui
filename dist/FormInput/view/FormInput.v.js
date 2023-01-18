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
var FormInputView = function FormInputView(_ref) {
  var componentStyles = _ref.componentStyles,
    autoComplete = _ref.autoComplete,
    attributes = _ref.attributes,
    className = _ref.className,
    autoFocus = _ref.autoFocus,
    tabIndex = _ref.tabIndex,
    readOnly = _ref.readOnly,
    onChange = _ref.onChange,
    applied = _ref.applied,
    type = _ref.type,
    name = _ref.name,
    id = _ref.id;
  return /*#__PURE__*/_react["default"].createElement(_style.FormInput, _extends({
    autoComplete: autoComplete,
    id: id,
    type: type,
    name: name,
    applied: applied,
    className: className,
    onChange: onChange,
    autoFocus: autoFocus,
    tabIndex: tabIndex,
    readOnly: readOnly,
    styles: componentStyles
  }, attributes));
};
FormInputView.propTypes = {
  autoComplete: _propTypes["default"].string,
  className: _propTypes["default"].string,
  componentStyles: _propTypes["default"].shape(),
  attributes: _propTypes["default"].shape({
    onChange: _propTypes["default"].string.func,
    placeholder: _propTypes["default"].string,
    value: _propTypes["default"].string
  }),
  autoFocus: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  type: _propTypes["default"].string,
  applied: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
  id: _propTypes["default"].string
};
var _default = FormInputView;
exports["default"] = _default;