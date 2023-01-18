"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = require("../style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListView = function ListView(props) {
  var children = props.children,
    className = props.className,
    onClick = props.onClick,
    rootRef = props.rootRef,
    componentStyles = props.componentStyles;
  return /*#__PURE__*/_react["default"].createElement(_style.List, {
    ref: rootRef,
    className: className,
    styles: componentStyles,
    onClick: onClick
  }, children);
};
ListView.displayName = 'ListView';
var _default = ListView;
exports["default"] = _default;