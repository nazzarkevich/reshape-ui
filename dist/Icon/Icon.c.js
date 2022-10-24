"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _view = _interopRequireDefault(require("./view"));

var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Icon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon(props) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Icon).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var onClick = _this.props.onClick;

      if (typeof onClick === 'function') {
        onClick(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (event) {
      var onMouseLeave = _this.props.onMouseLeave;

      if (typeof onMouseLeave === 'function') {
        onMouseLeave(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (event) {
      var onMouseOver = _this.props.onMouseOver;

      if (typeof onMouseOver === 'function') {
        onMouseOver(event);
      }
    });

    return _this;
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name,
          size = _this$props.size,
          rotate = _this$props.rotate,
          cursor = _this$props.cursor,
          error = _this$props.error,
          active = _this$props.active,
          secondary = _this$props.secondary,
          className = _this$props.className,
          hoverColor = _this$props.hoverColor,
          elementRef = _this$props.elementRef;
      var iconProps = {
        id: id,
        name: name,
        size: size,
        rotate: rotate,
        cursor: cursor,
        error: error,
        active: active,
        secondary: secondary,
        className: className,
        hoverColor: hoverColor,
        elementRef: elementRef,
        onMouseLeave: this.onMouseLeave,
        onMouseOver: this.onMouseOver,
        onClick: this.handleClick,
        componentStyles: componentStyles
      };
      return _react["default"].createElement(_view["default"], iconProps);
    }
  }]);

  return Icon;
}(_react.PureComponent);

_defineProperty(Icon, "propTypes", {
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  size: _propTypes["default"].string,
  rotate: _propTypes["default"].number,
  cursor: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  active: _propTypes["default"].bool,
  tertiary: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  hoverColor: _propTypes["default"].string,
  elementRef: _propTypes["default"].func
});

var _default = Icon;
exports["default"] = _default;