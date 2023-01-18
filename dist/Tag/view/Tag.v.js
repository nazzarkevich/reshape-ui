"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = require("../style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  var tagElement = /*#__PURE__*/_react["default"].createElement(_style.Tag, _extends({
    onClick: onClick,
    className: className,
    onContextMenu: onContextMenu,
    styles: componentStyles
  }, attributes), startIcon, children);
  if (editable) {
    tagElement = /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: FRAGMENT_KEY
    }, /*#__PURE__*/_react["default"].createElement(_style.Tag, _extends({
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