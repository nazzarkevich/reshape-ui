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

// TODO rewrite this component
var TreeElement =
/*#__PURE__*/
function (_Component) {
  _inherits(TreeElement, _Component);

  function TreeElement(props) {
    var _this;

    _classCallCheck(this, TreeElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeElement).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleMouseOver", function (event) {
      var _this$props = _this.props,
          onMouseOver = _this$props.onMouseOver,
          disableHover = _this$props.disableHover;

      if (!disableHover) {
        if (typeof onMouseOver === 'function') {
          onMouseOver(event);
        }

        _this.setState({
          hover: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function (event) {
      var onMouseLeave = _this.props.onMouseLeave;

      if (typeof onMouseLeave === 'function') {
        onMouseLeave(event);
      }

      _this.setState({
        hover: false
      });
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

    _defineProperty(_assertThisInitialized(_this), "handleInputKeyDown", function (event) {
      var onInputKeyDown = _this.props.onInputKeyDown;

      if (typeof onInputKeyDown === 'function') {
        onInputKeyDown(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var onInputChange = _this.props.onInputChange;

      if (typeof onInputChange === 'function') {
        onInputChange(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setInputRef", function (el) {
      var inputRef = _this.props.inputRef;
      _this.input = el;

      if (typeof inputRef === 'function') {
        inputRef(_this.input);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setRootRef", function (el) {
      var elementRef = _this.props.elementRef;

      if (typeof elementRef === 'function') {
        elementRef(el);
      }
    });

    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(TreeElement, [{
    key: "render",
    value: function render() {
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var hover = this.state.hover;
      var _this$props2 = this.props,
          inputValue = _this$props2.inputValue,
          onStatusIconClick = _this$props2.onStatusIconClick;

      var nodeItemProps = _objectSpread({}, this.props, {
        hover: hover,
        inputValue: inputValue,
        onStatusIconClick: onStatusIconClick,
        onClick: this.handleClick,
        setRootRef: this.setRootRef,
        setInputRef: this.setInputRef,
        onMouseOver: this.handleMouseOver,
        onMouseLeave: this.handleMouseLeave,
        onMouseDown: this.handleMouseDown,
        onInputChange: this.handleInputChange,
        onInputKeyDown: this.handleInputKeyDown,
        componentStyles: componentStyles
      });

      return _react["default"].createElement(_view["default"], nodeItemProps);
    }
  }]);

  return TreeElement;
}(_react.Component);

_defineProperty(TreeElement, "displayName", 'TreeElement');

_defineProperty(TreeElement, "defaultProps", {
  primary: false,
  secondary: false,
  disabled: false,
  disableHover: false
});

_defineProperty(TreeElement, "propTypes", {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  active: _propTypes["default"].bool,
  primary: _propTypes["default"].bool,
  editable: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  disableHover: _propTypes["default"].bool,
  inputValue: _propTypes["default"].string,
  elementName: _propTypes["default"].string,
  indents: _propTypes["default"].number,
  onClick: _propTypes["default"].func,
  inputRef: _propTypes["default"].func,
  elementRef: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  onInputChange: _propTypes["default"].func,
  onInputKeyDown: _propTypes["default"].func,
  showChildren: _propTypes["default"].bool,
  toggleButtonClassName: _propTypes["default"].string,
  toggleButtonName: _propTypes["default"].string,
  elementIconName: _propTypes["default"].string,
  actionIconName: _propTypes["default"].string,
  statusIconName: _propTypes["default"].string,
  statusIconClassName: _propTypes["default"].string,
  onStatusIconClick: _propTypes["default"].func
});

var _default = TreeElement;
exports["default"] = _default;