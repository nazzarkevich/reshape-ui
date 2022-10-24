"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireDefault(require("../../List"));

var _Input = _interopRequireDefault(require("../../Input"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  open: _propTypes["default"].bool,
  query: _propTypes["default"].string,
  inputSize: _propTypes["default"].string,
  rootRef: _propTypes["default"].func,
  listRef: _propTypes["default"].func,
  inputRef: _propTypes["default"].func,
  className: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  onKeyDown: _propTypes["default"].func,
  onQueryChange: _propTypes["default"].func,
  renderMenuItem: _propTypes["default"].func,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })),
  componentStyles: _propTypes["default"].shape()
};

var SearchMenuView = function SearchMenuView(props) {
  var open = props.open,
      query = props.query,
      options = props.options,
      listRef = props.listRef,
      rootRef = props.rootRef,
      inputRef = props.inputRef,
      className = props.className,
      onKeyDown = props.onKeyDown,
      inputSize = props.inputSize,
      placeholder = props.placeholder,
      onQueryChange = props.onQueryChange,
      renderMenuItem = props.renderMenuItem,
      componentStyles = props.componentStyles;
  var menuStyle = componentStyles.menuStyle,
      inputStyle = componentStyles.inputStyle,
      mainListStyle = componentStyles.mainListStyle,
      searchListStyle = componentStyles.searchListStyle;
  var menuElement = null,
      listElement = null;

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

  if (open) {
    menuElement = _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_Input["default"], {
      secondary: true,
      elementRef: inputRef,
      onChange: onQueryChange,
      placeholder: placeholder,
      onKeyDown: onKeyDown,
      style: inputStyle,
      medium: inputSize === 'medium'
    }), listElement);
  }

  return _react["default"].createElement(_style.Menu, {
    className: className,
    styles: menuStyle,
    ref: rootRef
  }, menuElement);
};

SearchMenuView.propTypes = propTypes;
var _default = SearchMenuView;
exports["default"] = _default;