"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = require("../style");
var _Icon = _interopRequireDefault(require("../../Icon"));
var _Input = _interopRequireDefault(require("../../Input"));
var _List = _interopRequireDefault(require("../../List"));
var _ListItem = _interopRequireDefault(require("../../ListItem"));
var _ListItemText = _interopRequireDefault(require("../../ListItemText"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var propTypes = {
  error: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  inputValue: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  setRootRef: _propTypes["default"].func,
  showDeleteButton: _propTypes["default"].bool,
  selectedOption: _propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  }),
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })).isRequired,
  listRef: _propTypes["default"].func,
  inputRef: _propTypes["default"].func,
  onInputChange: _propTypes["default"].func,
  onInputFocus: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onListItemClick: _propTypes["default"].func,
  onActionIconClick: _propTypes["default"].func,
  styles: _propTypes["default"].shape({})
};
var AutocompleteView = function AutocompleteView(props) {
  var error = props.error,
    options = props.options,
    className = props.className,
    inputValue = props.inputValue,
    placeholder = props.placeholder,
    showDeleteButton = props.showDeleteButton,
    isOptionFocused = props.isOptionFocused,
    isOptionActive = props.isOptionActive,
    isOptionInactive = props.isOptionInactive,
    isOptionSelected = props.isOptionSelected,
    isOpen = props.isOpen,
    secondary = props.secondary,
    onInputChange = props.onInputChange,
    onInputFocus = props.onInputFocus,
    onKeyDown = props.onKeyDown,
    onListItemClick = props.onListItemClick,
    onActionIconClick = props.onActionIconClick,
    setRootRef = props.setRootRef,
    listRef = props.listRef,
    inputRef = props.inputRef,
    styles = props.styles;
  var listStyle = (0, _utils.omitEmptyProperties)(_objectSpread(_objectSpread({}, styles.list), {}, {
    display: isOpen && options.length ? 'block' : 'none'
  }));
  return /*#__PURE__*/_react["default"].createElement(_style.DropdownMainWrapper, {
    styles: styles.mainWrapper,
    className: className,
    ref: setRootRef
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: placeholder,
    onChange: onInputChange,
    onFocus: onInputFocus,
    elementRef: inputRef,
    secondary: secondary,
    onKeyDown: onKeyDown,
    value: inputValue,
    error: error
  }), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    elementRef: listRef,
    style: listStyle
  }, options && options.map(function (option, index) {
    var id = option.id,
      icon = option.icon;
    var isSelected = isOptionSelected(id);
    var isActive = isOptionActive(id);
    var isInactive = isOptionInactive(id);
    var isFocused = isOptionFocused(index);
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      id: id,
      key: id,
      hover: isFocused,
      onClick: onListItemClick(option),
      style: styles.listItem
    }, icon && icon.name ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: icon.name,
      size: icon.size,
      disabled: isInactive,
      primary: isSelected || isActive,
      style: styles.icon
    }) : null, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      truncate: true,
      active: isSelected || isActive,
      inactive: isSelected ? false : isInactive
    }, option.name), showDeleteButton && isActive ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "delete",
      onClick: onActionIconClick(id),
      style: styles.actionIcon
    }) : null);
  })));
};
AutocompleteView.propTypes = propTypes;
var _default = AutocompleteView;
exports["default"] = _default;