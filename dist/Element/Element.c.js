"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = _interopRequireDefault(require("./style"));
var _view = _interopRequireDefault(require("./view"));
var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Element = /*#__PURE__*/function (_PureComponent) {
  _inherits(Element, _PureComponent);
  var _super = _createSuper(Element);
  function Element(props) {
    var _this;
    _classCallCheck(this, Element);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "getIconState", function () {
      var _this$props = _this.props,
        primary = _this$props.primary,
        secondary = _this$props.secondary,
        disabled = _this$props.disabled;
      return !primary && !secondary && !disabled;
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseOver", function (event) {
      var onMouseOver = _this.props.onMouseOver;
      if (typeof onMouseOver === 'function') {
        onMouseOver(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      var onMouseLeave = _this.props.onMouseLeave;
      if (typeof onMouseLeave === 'function') {
        onMouseLeave(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var onClick = _this.props.onClick;
      if (typeof onClick === 'function') {
        onClick(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (event) {
      var onMouseDown = _this.props.onMouseDown;
      if (typeof onMouseDown === 'function') {
        onMouseDown(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
      }
    });
    return _this;
  }
  _createClass(Element, [{
    key: "render",
    value: function render() {
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var nodeItemProps = _objectSpread(_objectSpread({}, this.props), {}, {
        onClick: this.handleClick,
        getIconState: this.getIconState,
        onKeyDown: this.handleKeyDown,
        onMouseOver: this.handleMouseOver,
        onMouseLeave: this.handleMouseLeave,
        onMouseDown: this.handleMouseDown,
        componentStyles: componentStyles
      });
      return /*#__PURE__*/_react["default"].createElement(_view["default"], nodeItemProps);
    }
  }]);
  return Element;
}(_react.PureComponent);
_defineProperty(Element, "displayName", 'Element');
_defineProperty(Element, "defaultProps", {
  primary: false,
  secondary: false,
  disabled: false,
  hideToggleButton: false,
  tabIndex: 0
});
_defineProperty(Element, "propTypes", {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  // need for keyDown event
  tabIndex: _propTypes["default"].number,
  root: _propTypes["default"].bool,
  primary: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  elementName: _propTypes["default"].string,
  elementIconName: _propTypes["default"].string,
  indents: _propTypes["default"].number,
  onClick: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  showChildren: _propTypes["default"].bool,
  hideToggleButton: _propTypes["default"].bool,
  toggleButtonClassName: _propTypes["default"].string,
  displayButtonClassName: _propTypes["default"].string
});
var _default = Element;
exports["default"] = _default;