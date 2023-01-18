"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = require("../style");
var _Icon = _interopRequireDefault(require("../../Icon"));
var _Input = _interopRequireDefault(require("../../Input"));
var _List = _interopRequireDefault(require("../../List"));
var _ListItem = _interopRequireDefault(require("../../ListItem"));
var _ListItemText = _interopRequireDefault(require("../../ListItemText"));
var _utils = require("../../utils");
var _dropdownSearch = require("../dropdownSearch.ct");
var _reactEventListener = _interopRequireDefault(require("react-event-listener"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DropdownSearchView = function DropdownSearchView(props) {
  var error = props.error,
    options = props.options,
    applied = props.applied,
    className = props.className,
    showToggleButton = props.showToggleButton,
    emptyListTitle = props.emptyListTitle,
    queryPlaceholder = props.queryPlaceholder,
    selectedId = props.selectedId,
    listMaxHeight = props.listMaxHeight,
    selectedElement = props.selectedElement,
    isOptionFocused = props.isOptionFocused,
    isOptionActive = props.isOptionActive,
    isOptionInactive = props.isOptionInactive,
    isOptionSelected = props.isOptionSelected,
    isOpen = props.isOpen,
    onKeyPress = props.onKeyPress,
    onKeyDown = props.onKeyDown,
    onInputChange = props.onInputChange,
    onTitleClick = props.onTitleClick,
    onListItemClick = props.onListItemClick,
    onActionButtonClick = props.onActionButtonClick,
    onToggleButtonClick = props.onToggleButtonClick,
    onDocumentClick = props.onDocumentClick,
    rootRef = props.rootRef,
    listRef = props.listRef,
    queryRef = props.queryRef,
    componentStyles = props.componentStyles;
  var toggleButtonElement = null;
  var dropDownTitleElement = /*#__PURE__*/_react["default"].createElement(_style.DropdownTitle, {
    onClick: onTitleClick,
    styles: componentStyles.title
  }, emptyListTitle);
  if (selectedId && selectedElement) {
    dropDownTitleElement = /*#__PURE__*/_react["default"].createElement(_style.DropdownTitle, {
      onClick: onTitleClick,
      styles: componentStyles.title
    }, selectedElement.name);
  }
  if (isOpen) {
    dropDownTitleElement = /*#__PURE__*/_react["default"].createElement(_Input["default"], {
      error: error,
      elementRef: queryRef,
      onKeyPress: onKeyPress,
      onKeyDown: onKeyDown,
      onChange: onInputChange,
      placeholder: selectedId && selectedElement ? selectedElement.name : queryPlaceholder,
      style: componentStyles.input
    });
  }
  if (showToggleButton) {
    toggleButtonElement = /*#__PURE__*/_react["default"].createElement(_style.DropdownButton, {
      onClick: onToggleButtonClick,
      styles: componentStyles.arrowButton
    }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "arrow-down"
    }));
  }
  var listStyle = (0, _utils.omitEmptyProperties)(_objectSpread(_objectSpread({}, componentStyles.list), {}, {
    display: isOpen && options.length ? 'block' : 'none',
    maxHeight: listMaxHeight
  }));
  return /*#__PURE__*/_react["default"].createElement(_style.DropdownMainWrapper, {
    styles: componentStyles.mainWrapper,
    className: className,
    applied: applied,
    ref: rootRef
  }, /*#__PURE__*/_react["default"].createElement(_reactEventListener["default"], {
    onMouseDown: onDocumentClick,
    target: document
  }), /*#__PURE__*/_react["default"].createElement(_style.DropdownTitleWrapper, {
    styles: componentStyles.titleWrapper
  }, dropDownTitleElement, toggleButtonElement), /*#__PURE__*/_react["default"].createElement(_List["default"], {
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
      key: id,
      id: id,
      onClick: onListItemClick(option),
      hover: isFocused,
      style: componentStyles.listItem
    }, icon && icon.name ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: icon.name,
      size: icon.size,
      primary: isSelected || isActive,
      disabled: isInactive
      // TODO remove
      // secondary={
      //     isSelected ? false : !isInactive
      // }
      ,
      style: componentStyles.icon
    }) : null, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      active: isSelected || isActive,
      inactive: isSelected ? false : isInactive
    }, option.name), isActive ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "delete",
      onClick: onActionButtonClick,
      className: _dropdownSearch.ACTION_BTN_CLASS,
      primary: isSelected || isActive,
      disabled: isInactive
      // TODO remove
      // secondary={
      //     isSelected || isActive ?
      //         false : !isInactive
      // }
      ,
      style: componentStyles.actionIcon
    }) : null);
  })));
};
var _default = DropdownSearchView;
exports["default"] = _default;