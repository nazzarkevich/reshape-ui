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

var _reactEventListener = _interopRequireDefault(require("react-event-listener"));

var _VirtualizedList = _interopRequireDefault(require("../../VirtualizedList"));

var _dropdownSearch = require("../dropdownSearch.ct");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VirtualizedDropdownView = function VirtualizedDropdownView(props) {
  var error = props.error,
      options = props.options,
      applied = props.applied,
      className = props.className,
      showToggleButton = props.showToggleButton,
      emptyListTitle = props.emptyListTitle,
      queryPlaceholder = props.queryPlaceholder,
      selectedId = props.selectedId,
      optionIndex = props.optionIndex,
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
      onToggleButtonClick = props.onToggleButtonClick,
      onDocumentClick = props.onDocumentClick,
      rootRef = props.rootRef,
      listRef = props.listRef,
      queryRef = props.queryRef,
      componentStyles = props.componentStyles;
  var toggleButtonElement = null;

  var dropDownTitleElement = _react["default"].createElement(_style.DropdownTitle, {
    onClick: onTitleClick,
    styles: componentStyles.title
  }, emptyListTitle);

  if (selectedId) {
    dropDownTitleElement = _react["default"].createElement(_style.DropdownTitle, {
      onClick: onTitleClick,
      styles: componentStyles.title
    }, selectedElement && selectedElement.name);
  }

  if (isOpen) {
    dropDownTitleElement = _react["default"].createElement(_Input["default"], {
      "data-hj-whitelist": "",
      error: error,
      elementRef: queryRef,
      onKeyPress: onKeyPress,
      onKeyDown: onKeyDown,
      onChange: onInputChange,
      placeholder: selectedId ? selectedElement.name : queryPlaceholder,
      style: componentStyles.input
    });
  }

  if (showToggleButton) {
    toggleButtonElement = _react["default"].createElement(_style.DropdownButton, {
      onClick: onToggleButtonClick,
      styles: componentStyles.arrowButton
    }, _react["default"].createElement(_Icon["default"], {
      name: "arrow-down"
    }));
  }

  return _react["default"].createElement(_style.DropdownMainWrapper, {
    className: className,
    styles: componentStyles.mainWrapper,
    applied: applied,
    ref: rootRef
  }, _react["default"].createElement(_reactEventListener["default"], {
    target: document,
    onMouseDown: onDocumentClick
  }), _react["default"].createElement(_style.DropdownTitleWrapper, {
    styles: componentStyles.titleWrapper
  }, dropDownTitleElement, toggleButtonElement), isOpen && options.length ? _react["default"].createElement(_VirtualizedList["default"], {
    options: options,
    listRef: listRef,
    listMaxHeight: listMaxHeight,
    onListItemClick: onListItemClick,
    selectedId: selectedId,
    optionIndex: optionIndex,
    actionIconClass: _dropdownSearch.ACTION_BTN_CLASS,
    isOptionSelected: isOptionSelected,
    isOptionActive: isOptionActive,
    isOptionInactive: isOptionInactive,
    isOptionFocused: isOptionFocused,
    iconStyles: componentStyles.icon,
    style: componentStyles.list
  }) : null);
};

VirtualizedDropdownView.propTypes = {
  optionIndex: _propTypes["default"].number,
  isOptionActive: _propTypes["default"].func
};
VirtualizedDropdownView.displayName = 'VirtualizedDropdownView';
var _default = VirtualizedDropdownView;
exports["default"] = _default;