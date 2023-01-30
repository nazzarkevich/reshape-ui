"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theme = _interopRequireDefault(require("../SwitchIconButton/theme"));
var _theme2 = _interopRequireDefault(require("../Autocomplete/theme"));
var _theme3 = _interopRequireDefault(require("../ActionButton/theme"));
var _theme4 = _interopRequireDefault(require("../IconButton/theme"));
var _theme5 = _interopRequireDefault(require("../FormInput/theme"));
var _theme6 = _interopRequireDefault(require("../Indicator/theme"));
var _themeContext = _interopRequireDefault(require("./themeContext"));
var _theme7 = _interopRequireDefault(require("../Indent/theme"));
var _theme8 = _interopRequireDefault(require("../Button/theme"));
var _theme9 = _interopRequireDefault(require("../Input/theme"));
var _theme10 = _interopRequireDefault(require("../InputDropdown/theme"));
var _theme11 = _interopRequireDefault(require("../Node/theme"));
var _theme12 = _interopRequireDefault(require("../Icon/theme"));
var _theme13 = _interopRequireDefault(require("../Menu/theme"));
var _theme14 = _interopRequireDefault(require("../Select/theme"));
var _theme15 = _interopRequireDefault(require("../NestedMenu/theme"));
var _theme16 = _interopRequireDefault(require("../List/theme"));
var _theme17 = _interopRequireDefault(require("../ListItem/theme"));
var _theme18 = _interopRequireDefault(require("../ListItemText/theme"));
var _theme19 = _interopRequireDefault(require("../Link/theme"));
var _theme20 = _interopRequireDefault(require("../Element/theme"));
var _theme21 = _interopRequireDefault(require("../TreeElement/theme"));
var _theme22 = _interopRequireDefault(require("../Tag/theme"));
var _theme23 = _interopRequireDefault(require("../Markers/theme"));
var _theme24 = _interopRequireDefault(require("../Tooltip/theme"));
var _theme25 = _interopRequireDefault(require("../Dialog/theme"));
var _theme26 = _interopRequireDefault(require("../Tabs/theme"));
var _theme27 = _interopRequireDefault(require("../TextField/theme"));
var _styles = _interopRequireDefault(require("../styles"));
var _deepmerge = _interopRequireDefault(require("deepmerge"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var propTypes = {
  theme: _propTypes["default"].shape({
    styles: _propTypes["default"].shape({})
  }),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
var ThemeProvider = function ThemeProvider(props) {
  var getTheme = function getTheme() {
    var _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme;
    var computedStyles = _objectSpread(_objectSpread({}, _styles["default"]), theme.styles);
    var componentTheme = {
      styles: computedStyles,
      tag: (0, _theme22["default"])(computedStyles),
      menu: (0, _theme13["default"])(computedStyles),
      select: (0, _theme14["default"])(computedStyles),
      list: (0, _theme16["default"])(computedStyles),
      input: (0, _theme9["default"])(computedStyles),
      inputDropdown: (0, _theme10["default"])(computedStyles),
      tabs: (0, _theme26["default"])(computedStyles),
      icon: (0, _theme12["default"])(computedStyles),
      node: (0, _theme11["default"])(computedStyles),
      link: (0, _theme19["default"])(computedStyles),
      dialog: (0, _theme25["default"])(computedStyles),
      indent: (0, _theme7["default"])(computedStyles),
      button: (0, _theme8["default"])(computedStyles),
      markers: (0, _theme23["default"])(computedStyles),
      element: (0, _theme20["default"])(computedStyles),
      tooltip: (0, _theme24["default"])(computedStyles),
      indicator: (0, _theme6["default"])(computedStyles),
      listItem: (0, _theme17["default"])(computedStyles),
      textField: (0, _theme27["default"])(computedStyles),
      formInput: (0, _theme5["default"])(computedStyles),
      nestedMenu: (0, _theme15["default"])(computedStyles),
      iconButton: (0, _theme4["default"])(computedStyles),
      treeElement: (0, _theme21["default"])(computedStyles),
      autocomplete: (0, _theme2["default"])(computedStyles),
      actionButton: (0, _theme3["default"])(computedStyles),
      listItemText: (0, _theme18["default"])(computedStyles),
      switchIconButton: (0, _theme["default"])(computedStyles)
    };
    return (0, _deepmerge["default"])(componentTheme, theme);
  };
  return /*#__PURE__*/_react["default"].createElement(_themeContext["default"].Provider, {
    value: getTheme()
  }, props.children);
};
ThemeProvider.propTypes = propTypes;
var _default = ThemeProvider;
exports["default"] = _default;