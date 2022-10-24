"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../Icon"));

var _Indent = _interopRequireDefault(require("../../Indent"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  indents: _propTypes["default"].number,
  tabIndex: _propTypes["default"].number,
  elementName: _propTypes["default"].string,
  elementIconName: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  showChildren: _propTypes["default"].bool,
  hideToggleButton: _propTypes["default"].bool,
  toggleButtonClassName: _propTypes["default"].string,
  displayButtonClassName: _propTypes["default"].string,
  componentStyles: _propTypes["default"].shape()
};

var ElementView = function ElementView(props) {
  var id = props.id,
      root = props.root,
      tabIndex = props.tabIndex,
      elementName = props.elementName,
      elementIconName = props.elementIconName,
      className = props.className,
      onClick = props.onClick,
      indents = props.indents,
      onKeyDown = props.onKeyDown,
      onMouseOver = props.onMouseOver,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      showChildren = props.showChildren,
      hideToggleButton = props.hideToggleButton,
      toggleButtonClassName = props.toggleButtonClassName,
      componentStyles = props.componentStyles;
  var indentElement = null;

  if (indents) {
    indentElement = _react["default"].createElement(_Indent["default"], {
      indentsNumber: indents
    });
  }

  return _react["default"].createElement(_style.Element, {
    id: id,
    root: root,
    tabIndex: tabIndex,
    "data-root": root,
    className: className,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    styles: componentStyles.element
  }, indentElement, _react["default"].createElement(_Icon["default"], {
    name: "arrow-right",
    className: toggleButtonClassName,
    rotate: showChildren ? 90 : null,
    hidden: hideToggleButton,
    style: componentStyles.toggleButton
  }), _react["default"].createElement(_Icon["default"], {
    name: elementIconName,
    style: componentStyles.elementIcon
  }), _react["default"].createElement(_style.ElementText, {
    styles: componentStyles.elementText
  }, elementName));
};

ElementView.propTypes = propTypes;
var _default = ElementView;
exports["default"] = _default;