"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var MenuView = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
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
  return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_style.Menu, {
    styles: menuStyle,
    className: className,
    onClick: onClick,
    ref: ref
  }, /*#__PURE__*/_react["default"].createElement(_List["default"], {
    style: listStyle
  }, options && options.map(function (option) {
    var id = option.id,
      name = option.name,
      icon = option.icon,
      hasDivider = option.hasDivider;
    var inactive = isInactive(id);
    var accent = isAccent(id);
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: id
    }, hasDivider ? /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
      style: {
        marginTop: 4,
        marginBottom: 4
      }
    }) : null, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: id,
      onClick: onListItemClick(option)
    }, icon && icon.name ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: icon.name,
      size: icon.size,
      secondary: accent,
      style: iconStyle
    }) : null
    // TODO remove after refactoring
    // <Icon
    //     name={icon.name}
    //     size={icon.size}
    //     secondary={!inactive}
    //     accent={accent}
    //     style={iconStyle}
    // /> : null
    , /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
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