"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListItemTextView = function ListItemTextView(props) {
  var children = props.children,
      className = props.className,
      componentStyles = props.componentStyles;
  return _react["default"].createElement(_style.ListItemText, {
    className: className,
    styles: componentStyles
  }, children);
};

ListItemTextView.displayName = 'ListItemTextView';
var _default = ListItemTextView;
exports["default"] = _default;