"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireWildcard(require("./style"));

var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  id: _propTypes["default"].string,
  title: _propTypes["default"].string,
  label: _propTypes["default"].string.isRequired,
  indents: _propTypes["default"].node,
  tabIndex: _propTypes["default"].number,
  elementRef: _propTypes["default"].func,
  startIcon: _propTypes["default"].node,
  nodeIcon: _propTypes["default"].node,
  endIcon: _propTypes["default"].node,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)])
};

var NodeView = function NodeView(props) {
  var id = props.id,
      label = props.label,
      title = props.title,
      content = props.content,
      indents = props.indents,
      tabIndex = props.tabIndex,
      startIcon = props.startIcon,
      nodeIcon = props.nodeIcon,
      endIcon = props.endIcon,
      className = props.className,
      onClick = props.onClick,
      elementRef = props.elementRef,
      onKeyDown = props.onKeyDown,
      onMouseOver = props.onMouseOver,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      rest = _objectWithoutProperties(props, ["id", "label", "title", "content", "indents", "tabIndex", "startIcon", "nodeIcon", "endIcon", "className", "onClick", "elementRef", "onKeyDown", "onMouseOver", "onMouseLeave", "onMouseDown"]);

  var styles = (0, _compileStyles["default"])(_style["default"], props);
  var contentElement = null;

  if (Array.isArray(content) && content.length) {
    contentElement = content.map(function (item) {
      return _react["default"].createElement(_style.Span, {
        key: item,
        styles: styles.content
      }, item);
    });
  }

  if (typeof content === 'string') {
    contentElement = _react["default"].createElement(_style.Span, {
      styles: styles.content
    }, content);
  }

  return _react["default"].createElement(_style.NodeWrapper, _extends({
    id: id,
    ref: elementRef,
    onClick: onClick,
    tabIndex: tabIndex,
    className: className,
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    styles: styles.node
  }, rest), indents, startIcon, nodeIcon, _react["default"].createElement(_style.Span, {
    styles: styles.label
  }, label), _react["default"].createElement(_style.Span, {
    styles: styles.contentWrapper
  }, title ? _react["default"].createElement(_style.Span, {
    styles: styles.title
  }, title) : null, contentElement), endIcon);
};

NodeView.propTypes = propTypes;
var _default = NodeView;
exports["default"] = _default;