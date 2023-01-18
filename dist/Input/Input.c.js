"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Input = _interopRequireDefault(require("./view/Input.v"));
var _style = _interopRequireDefault(require("./style"));
var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));
var _utils = require("../utils");
var _input = require("./input.ct");
var _constants = require("../constants");
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
var propTypes = {
  id: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({})]),
  type: _propTypes["default"].string,
  name: _propTypes["default"].string,
  className: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  maxLength: _propTypes["default"].number,
  onKeyPress: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  elementRef: _propTypes["default"].func,
  autoFocus: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  validate: _propTypes["default"].func,
  truncate: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  secondary: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string, _propTypes["default"].object])
};
var initialState = {
  value: _input.INITIAL_VALUE,
  error: false,
  step: 1
};
var Input = /*#__PURE__*/function (_PureComponent) {
  _inherits(Input, _PureComponent);
  var _super = _createSuper(Input);
  function Input(props) {
    var _this;
    _classCallCheck(this, Input);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var onFocus = _this.props.onFocus;
      if (typeof onFocus === 'function') {
        onFocus(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var onBlur = _this.props.onBlur;
      if (typeof onBlur === 'function') {
        onBlur(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (event) {
      var onMouseEnter = _this.props.onMouseEnter;
      if (typeof onMouseEnter === 'function') {
        onMouseEnter(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function (event) {
      var onMouseLeave = _this.props.onMouseLeave;
      if (typeof onMouseLeave === 'function') {
        onMouseLeave(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var onChange = _this.props.onChange;
      var value = event.target.value;
      if (typeof onChange === 'function') {
        onChange(event);
      }
      _this.validate(value);
      _this.setState({
        value: value
      });
    });
    _defineProperty(_assertThisInitialized(_this), "validate", function (value) {
      var validate = _this.props.validate;
      if (typeof validate === 'function' && value) {
        if (validate(value)) _this.setState({
          error: false
        });
        if (!validate(value)) _this.setState({
          error: true
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (typeof onKeyDown === 'function') onKeyDown(event);

      // const { key, shiftKey, target: { value } } = event;

      // if (key === KEY.ARROW_UP || key === KEY.ARROW_DOWN) {
      //     event.preventDefault();
      //
      //     if (isNumber(value)) {
      //         if (shiftKey && key === KEY.ARROW_UP) this.increment(value, 10);
      //         // eslint-disable-next-line max-len
      //         if (shiftKey && key === KEY.ARROW_DOWN) this.decrement(value, 10);
      //
      //         if (!shiftKey && key === KEY.ARROW_UP) this.increment(value);
      //         if (!shiftKey && key === KEY.ARROW_DOWN) this.decrement(value);
      //     }
      // }
    });
    _defineProperty(_assertThisInitialized(_this), "increment", function (value) {
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      _this.setState({
        value: String(parseInt(value) + step)
      });
    });
    _defineProperty(_assertThisInitialized(_this), "decrement", function (value) {
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      _this.setState({
        value: String(parseInt(value) - step)
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      var onKeyPress = _this.props.onKeyPress;
      if (typeof onKeyPress === 'function') {
        onKeyPress(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "createRef", function (el) {
      var elementRef = _this.props.elementRef;
      if (typeof elementRef === 'function') {
        elementRef(el);
      }
      _this.input = el;
    });
    _this.state = _objectSpread({}, initialState);
    return _this;
  }
  _createClass(Input, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
        error = _this$props.error,
        value = _this$props.value;
      if (prevProps.value !== value && value === null) {
        this.setState(_objectSpread({}, initialState));
      }
      if (prevProps.error !== error) {
        this.setState({
          error: error
        });
      }
      if (prevState.error !== this.state.error) {
        this.setState({
          error: this.state.error
        });
      }
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.input;
    }
  }, {
    key: "render",
    value: function render() {
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var _this$state = this.state,
        value = _this$state.value,
        error = _this$state.error;
      var _this$props2 = this.props,
        id = _this$props2.id,
        type = _this$props2.type,
        name = _this$props2.name,
        className = _this$props2.className,
        placeholder = _this$props2.placeholder,
        maxLength = _this$props2.maxLength,
        autoFocus = _this$props2.autoFocus,
        disabled = _this$props2.disabled,
        readonly = _this$props2.readonly;
      var attributes = {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        ref: this.createRef,
        placeholder: placeholder
      };
      var inputProps = {
        id: id,
        type: type,
        name: name,
        error: error,
        value: value,
        className: className,
        readonly: readonly,
        disabled: disabled,
        autoFocus: autoFocus,
        maxLength: maxLength,
        attributes: attributes,
        onKeyDown: this.handleKeyDown,
        onKeyPress: this.handleKeyPress,
        onChange: this.handleChange,
        componentStyles: componentStyles
      };
      return /*#__PURE__*/_react["default"].createElement(_Input["default"], inputProps);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var value = nextProps.value;

      // makes component controllable
      if ((0, _utils.isValid)(value) && value !== prevState.value) {
        return {
          value: value
        };
      }
      return null;
    }
  }]);
  return Input;
}(_react.PureComponent);
_defineProperty(Input, "displayName", 'Input');
_defineProperty(Input, "defaultProps", {
  // type of native input
  type: 'text',
  error: false
});
_defineProperty(Input, "propTypes", propTypes);
var _default = Input;
exports["default"] = _default;