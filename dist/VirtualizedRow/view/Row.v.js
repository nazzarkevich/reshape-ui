"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../Icon"));

var _ListItem = _interopRequireDefault(require("../../ListItem"));

var _ListItemText = _interopRequireDefault(require("../../ListItemText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RowView = function RowView(props) {
  var style = props.style,
      index = props.index,
      data = props.data,
      onMouseOver = props.onMouseOver,
      onMouseLeave = props.onMouseLeave;
  var options = data.options,
      actionIconClass = data.actionIconClass,
      onListItemClick = data.onListItemClick,
      isOptionSelected = data.isOptionSelected,
      isOptionInactive = data.isOptionInactive,
      isOptionActive = data.isOptionActive,
      isOptionFocused = data.isOptionFocused,
      iconStyles = data.iconStyles;
  var option = options[index];
  var id = option.id,
      name = option.name;
  var isActive = isOptionActive(id);
  var isSelected = isOptionSelected(id);
  var isInactive = isOptionInactive(id);
  var isFocused = isOptionFocused(index);
  return _react["default"].createElement(_ListItem["default"], {
    key: id,
    id: id,
    style: style,
    onClick: onListItemClick(option),
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    hover: isFocused
  }, _react["default"].createElement(_ListItemText["default"], {
    active: isSelected || isActive,
    inactive: isSelected ? false : isInactive,
    truncate: true
  }, name), isActive ? _react["default"].createElement(_Icon["default"], {
    name: "delete",
    className: actionIconClass,
    secondary: isSelected || isActive ? false : !isInactive,
    style: iconStyles
  }) : null);
};

RowView.propTypes = {
  iconClassName: _propTypes["default"].string,
  hover: _propTypes["default"].bool,
  onMouseOver: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func
};
var _default = RowView;
exports["default"] = _default;