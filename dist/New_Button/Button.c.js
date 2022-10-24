"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _view = _interopRequireDefault(require("./view"));

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

var Button =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

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

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var onClick = _this.props.onClick;

      if (typeof onClick === 'function') {
        onClick(event);
      }
    });

    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          elementRef = _this$props.elementRef,
          className = _this$props.className,
          disabled = _this$props.disabled,
          children = _this$props.children,
          form = _this$props.form,
          type = _this$props.type,
          name = _this$props.name,
          id = _this$props.id;
      var buttonProps = {
        onMouseLeave: this.handleMouseLeave,
        onMouseOver: this.handleMouseOver,
        onClick: this.handleClick,
        elementRef: elementRef,
        className: className,
        disabled: disabled,
        children: children,
        form: form,
        type: type,
        name: name,
        id: id
      };
      return _react["default"].createElement(_view["default"], buttonProps);
    }
  }]);

  return Button;
}(_react.PureComponent);

_defineProperty(Button, "displayName", 'Button');

_defineProperty(Button, "propTypes", {
  elementRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].instanceOf(Element)
  })]),
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  rounded: _propTypes["default"].bool,
  large: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  variant: _propTypes["default"].string,
  type: _propTypes["default"].string,
  name: _propTypes["default"].string,
  form: _propTypes["default"].string,
  id: _propTypes["default"].string
});

_defineProperty(Button, "defaultProps", {
  type: 'submit'
});

var _default = Button;
exports["default"] = _default;