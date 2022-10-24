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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormInput, _PureComponent);

  function FormInput(props) {
    var _this;

    _classCallCheck(this, FormInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var value = event.target.value;
      var onChange = _this.props.onChange;
      if (typeof onChange === 'function') onChange(event);

      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(FormInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.props.value;

      if (prevProps.value !== value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          autoComplete = _this$props.autoComplete,
          className = _this$props.className,
          autoFocus = _this$props.autoFocus,
          tabIndex = _this$props.tabIndex,
          readOnly = _this$props.readOnly,
          applied = _this$props.applied,
          name = _this$props.name,
          type = _this$props.type,
          id = _this$props.id;
      var attributes = {
        onChange: this.handleChange,
        placeholder: placeholder,
        value: value
      };
      var inputProps = {
        componentStyles: componentStyles,
        autoComplete: autoComplete,
        attributes: attributes,
        autoFocus: autoFocus,
        tabIndex: tabIndex,
        readOnly: readOnly,
        className: className,
        applied: applied,
        type: type,
        name: name,
        id: id
      };
      return _react["default"].createElement(_view["default"], inputProps);
    }
  }]);

  return FormInput;
}(_react.PureComponent);

_defineProperty(FormInput, "displayName", 'FormInput');

_defineProperty(FormInput, "defaultProps", {
  readOnly: false,
  autoFocus: false,
  placeholder: '',
  className: '',
  type: 'text',
  applied: '',
  value: '',
  name: null
});

_defineProperty(FormInput, "propTypes", {
  autoComplete: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired,
  placeholder: _propTypes["default"].string,
  className: _propTypes["default"].string,
  tabIndex: _propTypes["default"].number,
  autoFocus: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  type: _propTypes["default"].string,
  id: _propTypes["default"].string,
  applied: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]).isRequired
});

var _default = FormInput;
exports["default"] = _default;