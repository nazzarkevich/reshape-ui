"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./button.css");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = ['padding-r', 'padding-l', 'rounded-sm', 'border-width', 'border-solid', 'border-color-foreground', 'font-family', 'text-s', 'bg-primary'];
var buttonStyles = (0, _classnames["default"])(styles);

var ButtonView = function ButtonView(_ref) {
  var onMouseLeave = _ref.onMouseLeave,
      onMouseOver = _ref.onMouseOver,
      elementRef = _ref.elementRef,
      className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      form = _ref.form,
      name = _ref.name,
      type = _ref.type,
      id = _ref.id;
  return _react["default"].createElement("button", {
    id: id,
    name: name,
    type: type,
    form: form,
    ref: elementRef,
    onClick: onClick,
    disabled: disabled,
    className: "r-button",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave
  }, children);
};

ButtonView.propTypes = {
  elementRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].instanceOf(Element)
  })]),
  componentStyles: _propTypes["default"].shape(),
  onMouseLeave: _propTypes["default"].func,
  className: _propTypes["default"].string,
  onMouseOver: _propTypes["default"].func,
  children: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  type: _propTypes["default"].string,
  name: _propTypes["default"].string,
  form: _propTypes["default"].string,
  id: _propTypes["default"].string
};
var _default = ButtonView;
exports["default"] = _default;