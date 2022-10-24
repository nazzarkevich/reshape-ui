"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputDropdown = _interopRequireDefault(require("./InputDropdown.v"));

var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));

var _style = _interopRequireDefault(require("./style"));

var _units = _interopRequireDefault(require("./units"));

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

var propTypes = {
  value: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  selectedId: _propTypes["default"].string,
  onInputKeyDown: _propTypes["default"].func,
  onInputChange: _propTypes["default"].func,
  onInputBlur: _propTypes["default"].func,
  onDropdownChange: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  secondary: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  disableDropdown: _propTypes["default"].bool,
  showDropdown: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })).isRequired
};
var defaultProps = {
  options: _units["default"],
  showDropdown: false,
  disableDropdown: false
};

var InputDropdown =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(InputDropdown, _PureComponent);

  function InputDropdown(props) {
    var _this;

    _classCallCheck(this, InputDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputDropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleDropdownChange", function (event, value) {
      var onDropdownChange = _this.props.onDropdownChange;

      if (typeof onDropdownChange === 'function') {
        onDropdownChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var onInputChange = _this.props.onInputChange;

      if (typeof onInputChange === 'function') {
        onInputChange(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputKeyDown", function (event) {
      var onInputKeyDown = _this.props.onInputKeyDown;

      if (typeof onInputKeyDown === 'function') {
        onInputKeyDown(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputFocus", function (event) {
      event.target.select();
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function (event) {
      var onInputBlur = _this.props.onInputBlur;

      if (typeof onInputBlur === 'function') {
        onInputBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      var _this$props = _this.props,
          value = _this$props.value,
          selectedId = _this$props.selectedId,
          onChange = _this$props.onChange;

      if (typeof onChange === 'function') {
        onChange({
          value: value,
          selectedId: selectedId
        });
      }
    });

    return _this;
  }

  _createClass(InputDropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          value = _this$props2.value,
          selectedId = _this$props2.selectedId;

      if (value !== prevProps.value || selectedId !== prevProps.selectedId) {
        this.handleChange();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          selectedId = _this$props3.selectedId,
          showDropdown = _this$props3.showDropdown;
      var _this$props4 = this.props,
          error = _this$props4.error,
          options = _this$props4.options,
          secondary = _this$props4.secondary,
          placeholder = _this$props4.placeholder,
          disableDropdown = _this$props4.disableDropdown;
      var styles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var inputDropdownProps = {
        styles: styles,
        value: value,
        error: error,
        options: options,
        secondary: secondary,
        selectedId: selectedId,
        placeholder: placeholder,
        showDropdown: showDropdown,
        disableDropdown: disableDropdown,
        onInputBlur: this.handleInputBlur,
        onInputFocus: this.handleInputFocus,
        onInputChange: this.handleInputChange,
        onInputKeyDown: this.handleInputKeyDown,
        onDropdownChange: this.handleDropdownChange
      };
      return _react["default"].createElement(_InputDropdown["default"], inputDropdownProps);
    }
  }]);

  return InputDropdown;
}(_react.PureComponent);

_defineProperty(InputDropdown, "propTypes", propTypes);

_defineProperty(InputDropdown, "defaultProps", defaultProps);

var _default = InputDropdown;
exports["default"] = _default;