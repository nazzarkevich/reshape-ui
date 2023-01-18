"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _IconButton = _interopRequireDefault(require("../../IconButton"));
var _Icon = _interopRequireDefault(require("../../Icon"));
var _Input = _interopRequireDefault(require("../../Input"));
var _Indent = _interopRequireDefault(require("../../Indent"));
var _style = require("../style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  primary: _propTypes["default"].bool,
  editable: _propTypes["default"].bool,
  indents: _propTypes["default"].number,
  inputValue: _propTypes["default"].string,
  elementName: _propTypes["default"].string,
  elementIconName: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  setRootRef: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  onInputChange: _propTypes["default"].func,
  onInputKeyDown: _propTypes["default"].func,
  setInputRef: _propTypes["default"].func,
  showChildren: _propTypes["default"].bool,
  toggleButtonClassName: _propTypes["default"].string,
  actionIconClassName: _propTypes["default"].string,
  statusIconName: _propTypes["default"].string,
  toggleButtonName: _propTypes["default"].string,
  actionIconName: _propTypes["default"].string,
  statusIconClassName: _propTypes["default"].string,
  onStatusIconClick: _propTypes["default"].func,
  componentStyles: _propTypes["default"].shape()
};
var TreeElementView = function TreeElementView(props) {
  var id = props.id,
    primary = props.primary,
    inputValue = props.inputValue,
    elementName = props.elementName,
    className = props.className,
    onClick = props.onClick,
    indents = props.indents,
    editable = props.editable,
    setRootRef = props.setRootRef,
    setInputRef = props.setInputRef,
    onMouseOver = props.onMouseOver,
    onMouseLeave = props.onMouseLeave,
    onMouseDown = props.onMouseDown,
    showChildren = props.showChildren,
    onInputChange = props.onInputChange,
    onInputKeyDown = props.onInputKeyDown,
    toggleButtonClassName = props.toggleButtonClassName,
    toggleButtonName = props.toggleButtonName,
    elementIconName = props.elementIconName,
    actionIconName = props.actionIconName,
    statusIconName = props.statusIconName,
    actionIconClassName = props.actionIconClassName,
    statusIconClassName = props.statusIconClassName,
    onStatusIconClick = props.onStatusIconClick,
    componentStyles = props.componentStyles;
  var indentElement = null,
    elementIconElement = null,
    childrenIconElement = null,
    actionIconElement = null,
    statusIconElement = null;
  if (indents) {
    indentElement = /*#__PURE__*/_react["default"].createElement(_Indent["default"], {
      number: indents
    });
  }
  if (toggleButtonName) {
    childrenIconElement = /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: toggleButtonName,
      className: toggleButtonClassName,
      rotate: showChildren ? 90 : null,
      style: componentStyles.toggleButton
    });
  }
  if (elementIconName) {
    elementIconElement = /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: elementIconName,
      style: componentStyles.elementIcon
    });
  }
  if (!editable && statusIconName) {
    statusIconElement = /*#__PURE__*/_react["default"].createElement(_style.IconWrapper, {
      className: statusIconClassName,
      styles: componentStyles.statusIconWrapper
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      iconName: statusIconName,
      onClick: onStatusIconClick,
      style: componentStyles.statusIcon
    }));
  }
  if (actionIconName) {
    actionIconElement = /*#__PURE__*/_react["default"].createElement(_style.IconWrapper, {
      className: actionIconClassName,
      styles: componentStyles.actionIconWrapper
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      active: primary,
      iconName: actionIconName,
      style: componentStyles.statusIcon
    }));
  }
  var textElement = /*#__PURE__*/_react["default"].createElement(_style.ElementText, {
    styles: componentStyles.elementText
  }, elementName);
  if (editable) {
    textElement = /*#__PURE__*/_react["default"].createElement(_Input["default"], {
      value: inputValue,
      elementRef: setInputRef,
      onChange: onInputChange,
      onKeyDown: onInputKeyDown,
      style: componentStyles.input
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_style.Element, {
    id: id,
    ref: setRootRef,
    onClick: onClick,
    className: className,
    onMouseDown: onMouseDown,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    styles: componentStyles.element
  }, indentElement, childrenIconElement, elementIconElement, textElement, actionIconElement, statusIconElement);
};
TreeElementView.propTypes = propTypes;
var _default = TreeElementView;
exports["default"] = _default;