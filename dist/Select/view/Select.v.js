"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = require("../style");
var _List = _interopRequireDefault(require("../../List"));
var _ListItem = _interopRequireDefault(require("../../ListItem"));
var _ListItemText = _interopRequireDefault(require("../../ListItemText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var propTypes = {
  open: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onKeyDown: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  setRootRef: _propTypes["default"].func,
  onTitleClick: _propTypes["default"].func,
  onOptionClick: _propTypes["default"].func,
  componentStyles: _propTypes["default"].shape(),
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  }))
};
var SelectView = function SelectView(props) {
  var open = props.open,
    value = props.value,
    options = props.options,
    className = props.className,
    setRootRef = props.setRootRef,
    onTitleClick = props.onTitleClick,
    onOptionClick = props.onOptionClick,
    componentStyles = props.componentStyles;
  var listStyle = componentStyles.listStyle,
    titleStyle = componentStyles.titleStyle,
    wrapperStyle = componentStyles.wrapperStyle,
    listItemStyle = componentStyles.listItemStyle,
    listItemTextStyle = componentStyles.listItemTextStyle;
  var optionList = /*#__PURE__*/_react["default"].createElement(_List["default"], {
    className: className,
    style: _objectSpread(_objectSpread({}, listStyle), {}, {
      width: wrapperStyle.width
    })
  }, options && options.map(function (option) {
    var id = option.id,
      name = option.name;
    var active = value === id;
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: id
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: id,
      style: listItemStyle,
      onClick: onOptionClick(option)
    }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      truncate: true,
      active: active,
      style: listItemTextStyle
    }, name)));
  }));
  return /*#__PURE__*/_react["default"].createElement(_style.Wrapper, {
    ref: setRootRef,
    styles: wrapperStyle
  }, /*#__PURE__*/_react["default"].createElement(_style.Title, {
    onClick: onTitleClick,
    styles: titleStyle
  }, value), open ? optionList : null);
};
SelectView.displayName = 'SelectView';
SelectView.propTypes = propTypes;
var _default = SelectView;
exports["default"] = _default;