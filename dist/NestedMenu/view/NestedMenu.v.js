"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireDefault(require("../../List"));

var _Input = _interopRequireDefault(require("../../Input"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  open: _propTypes["default"].bool,
  modal: _propTypes["default"].bool,
  query: _propTypes["default"].string,
  inputSize: _propTypes["default"].string,
  rootRef: _propTypes["default"].func,
  listRef: _propTypes["default"].func,
  inputRef: _propTypes["default"].func,
  className: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  onKeyDown: _propTypes["default"].func,
  disableSearch: _propTypes["default"].bool,
  onQueryChange: _propTypes["default"].func,
  renderMenuItem: _propTypes["default"].func,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })),
  componentStyles: _propTypes["default"].shape() // menuCoords:      PropTypes.shape({
  //     top:  PropTypes.number,
  //     left: PropTypes.number
  // })

};

var NestedMenuView = function NestedMenuView(props) {
  var open = props.open,
      modal = props.modal,
      query = props.query,
      options = props.options,
      listRef = props.listRef,
      rootRef = props.rootRef,
      inputRef = props.inputRef,
      className = props.className,
      onKeyDown = props.onKeyDown,
      inputSize = props.inputSize,
      placeholder = props.placeholder,
      disableSearch = props.disableSearch,
      onQueryChange = props.onQueryChange,
      renderMenuItem = props.renderMenuItem,
      componentStyles = props.componentStyles;
  var menuStyle = componentStyles.menuStyle,
      inputStyle = componentStyles.inputStyle,
      mainListStyle = componentStyles.mainListStyle,
      searchListStyle = componentStyles.searchListStyle;
  var listElement = null;

  if (options.length) {
    var listStyle = _objectSpread({}, mainListStyle);

    if (query) listStyle = _objectSpread({}, listStyle, {}, searchListStyle);
    listElement = _react["default"].createElement(_List["default"], {
      style: listStyle,
      elementRef: listRef
    }, options.map(function (listItem) {
      return renderMenuItem(listItem, 0, componentStyles);
    }));
  }

  var menuElement = _react["default"].createElement(_style.Menu, {
    className: className,
    styles: menuStyle,
    ref: rootRef
  }, !disableSearch ? _react["default"].createElement(_Input["default"], {
    secondary: true,
    elementRef: inputRef,
    onChange: onQueryChange,
    placeholder: placeholder,
    onKeyDown: onKeyDown,
    style: inputStyle,
    medium: inputSize === 'medium'
  }) : null, listElement);

  if (open && modal) {
    return _reactDom["default"].createPortal(menuElement, document.body);
  }

  if (open) {
    return menuElement;
  }

  return null;
};

NestedMenuView.propTypes = propTypes;
var _default = NestedMenuView;
exports["default"] = _default;