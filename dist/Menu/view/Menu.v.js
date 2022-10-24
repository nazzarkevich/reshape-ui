"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../Icon"));

var _Divider = _interopRequireDefault(require("../../Divider"));

var _List = _interopRequireDefault(require("../../List"));

var _ListItem = _interopRequireDefault(require("../../ListItem"));

var _ListItemText = _interopRequireDefault(require("../../ListItemText"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var propTypes = {
  isOpen: _propTypes["default"].bool,
  isAccent: _propTypes["default"].func,
  isInactive: _propTypes["default"].func,
  className: _propTypes["default"].string,
  onKeyDown: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onListItemClick: _propTypes["default"].func,
  componentStyles: _propTypes["default"].shape(),
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  }))
};

var MenuView = _react["default"].forwardRef(function (props, ref) {
  var onClick = props.onClick,
      isOpen = props.isOpen,
      options = props.options,
      isAccent = props.isAccent,
      isInactive = props.isInactive,
      className = props.className,
      onListItemClick = props.onListItemClick,
      componentStyles = props.componentStyles;
  var menuStyle = componentStyles.menuStyle,
      listStyle = componentStyles.listStyle,
      iconStyle = componentStyles.iconStyle;
  if (!isOpen) return null;
  return _reactDom["default"].createPortal(_react["default"].createElement(_style.Menu, {
    styles: menuStyle,
    className: className,
    onClick: onClick,
    ref: ref
  }, _react["default"].createElement(_List["default"], {
    style: listStyle
  }, options && options.map(function (option) {
    var id = option.id,
        name = option.name,
        icon = option.icon,
        hasDivider = option.hasDivider;
    var inactive = isInactive(id);
    var accent = isAccent(id);
    return _react["default"].createElement(_react.Fragment, {
      key: id
    }, hasDivider ? _react["default"].createElement(_Divider["default"], {
      style: {
        marginTop: 4,
        marginBottom: 4
      }
    }) : null, _react["default"].createElement(_ListItem["default"], {
      key: id,
      onClick: onListItemClick(option)
    }, icon && icon.name ? _react["default"].createElement(_Icon["default"], {
      name: icon.name,
      size: icon.size,
      secondary: accent,
      style: iconStyle
    }) : null // TODO remove after refactoring
    // <Icon
    //     name={icon.name}
    //     size={icon.size}
    //     secondary={!inactive}
    //     accent={accent}
    //     style={iconStyle}
    // /> : null
    , _react["default"].createElement(_ListItemText["default"], {
      truncate: true,
      accent: accent,
      inactive: inactive
    }, name)));
  }))), document.body);
});

MenuView.displayName = 'MenuView';
MenuView.propTypes = propTypes;
var _default = MenuView;
exports["default"] = _default;