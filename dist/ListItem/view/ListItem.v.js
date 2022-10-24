"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListItemView = function ListItemView(props) {
  var id = props.id,
      data = props.data,
      onClick = props.onClick,
      children = props.children,
      className = props.className,
      elementRef = props.elementRef,
      onMouseOver = props.onMouseOver,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      componentStyles = props.componentStyles;
  return _react["default"].createElement(_style.ListItem, {
    id: id,
    "data-id": data,
    ref: elementRef,
    onClick: onClick,
    className: className,
    onMouseOver: onMouseOver,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    styles: componentStyles
  }, children);
};

ListItemView.displayName = 'ListItemView';
ListItemView.propTypes = {
  id: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  elementRef: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  componentStyles: _propTypes["default"].shape()
};
var _default = ListItemView;
exports["default"] = _default;