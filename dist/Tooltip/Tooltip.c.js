"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _view = _interopRequireDefault(require("./view"));
var _style = _interopRequireDefault(require("./style"));
var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));
var _utils = require("./utils");
var _tooltip = require("./tooltip.ct");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var Tooltip = /*#__PURE__*/function (_Component) {
  _inherits(Tooltip, _Component);
  var _super = _createSuper(Tooltip);
  function Tooltip(props) {
    var _this;
    _classCallCheck(this, Tooltip);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "handleContainerScroll", function () {
      var show = _this.state.show;
      if (show) _this.hideTooltip();
    });
    _defineProperty(_assertThisInitialized(_this), "showTooltip", function () {
      _this.setState({
        show: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "hideTooltip", function () {
      clearTimeout(_this.timerId);
      _this.setState({
        show: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseOver", function () {
      _this.setState({
        hover: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      _this.setState({
        hover: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "setTooltipRef", function (el) {
      _this.tooltip = el;
    });
    _defineProperty(_assertThisInitialized(_this), "setRootRef", function (el) {
      _this.root = el;
    });
    _defineProperty(_assertThisInitialized(_this), "getPosition", function () {
      var placement = _this.props.placement;
      var rootInfo = _this.root.firstChild.getBoundingClientRect();
      var tooltipInfo = _this.tooltip.getBoundingClientRect();
      return {
        left: (0, _utils.calcLeftPosition)(rootInfo, tooltipInfo, placement),
        top: (0, _utils.calcTopPosition)(rootInfo, tooltipInfo, placement)
      };
    });
    _defineProperty(_assertThisInitialized(_this), "setPosition", function () {
      var position = _this.getPosition();
      _this.setState({
        position: position
      });
    });
    _this.state = {
      show: false,
      hover: false,
      position: null
    };
    _this.scrollContainer = null;
    return _this;
  }
  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollContainer = document.querySelector(".".concat(_tooltip.TOOLTIP_SCROLL_CONTAINER));
      if (this.scrollContainer) {
        this.scrollContainer.addEventListener('scroll', this.handleContainerScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollContainer) {
        this.scrollContainer.removeEventListener('scroll', this.handleContainerScroll);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$state = this.state,
        hover = _this$state.hover,
        show = _this$state.show;
      var enterDelay = this.props.enterDelay;
      if (hover && hover !== prevState.hover) {
        this.timerId = setTimeout(this.showTooltip, enterDelay);
      }
      if (!hover && hover !== prevState.hover) {
        this.hideTooltip();
      }
      if (show && show !== prevState.show) {
        this.setPosition();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        id = _this$props.id,
        children = _this$props.children,
        placement = _this$props.placement,
        title = _this$props.title,
        className = _this$props.className;
      var _this$state2 = this.state,
        tooltipPosition = _this$state2.position,
        show = _this$state2.show;
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var props = {
        id: id,
        show: show,
        title: title,
        className: className,
        placement: placement,
        children: children,
        tooltipPosition: tooltipPosition,
        componentStyles: componentStyles,
        setRootRef: this.setRootRef,
        setTooltipRef: this.setTooltipRef,
        onMouseOver: this.handleMouseOver,
        onMouseLeave: this.handleMouseLeave
      };
      return /*#__PURE__*/_react["default"].createElement(_view["default"], props);
    }
  }]);
  return Tooltip;
}(_react.Component);
_defineProperty(Tooltip, "displayName", 'Tooltip');
_defineProperty(Tooltip, "propTypes", {
  id: _propTypes["default"].string,
  placement: _propTypes["default"].string,
  title: _propTypes["default"].string,
  className: _propTypes["default"].string,
  // The number of milliseconds
  // to wait before showing the tooltip
  enterDelay: _propTypes["default"].number,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
});
_defineProperty(Tooltip, "defaultProps", {
  placement: _tooltip.PLACEMENT.TOP,
  title: _tooltip.DEFAULT_TITLE,
  enterDelay: _tooltip.ENTER_DELAY
});
var _default = Tooltip;
exports["default"] = _default;