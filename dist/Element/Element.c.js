"use strict";

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Element =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Element, _PureComponent);

  function Element(props) {
    var _this;

    _classCallCheck(this, Element);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Element).call(this, props));

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

      var nodeItemProps = _objectSpread({}, this.props, {
        onClick: this.handleClick,
        getIconState: this.getIconState,
        onKeyDown: this.handleKeyDown,
        onMouseOver: this.handleMouseOver,
        onMouseLeave: this.handleMouseLeave,
        onMouseDown: this.handleMouseDown,
        componentStyles: componentStyles
      });

      return _react["default"].createElement(_view["default"], nodeItemProps);
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