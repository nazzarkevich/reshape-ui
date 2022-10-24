"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _view = _interopRequireDefault(require("./view"));

var _style = _interopRequireDefault(require("./style"));

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

var propTypes = {
  value: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  editable: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onBlur: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onInput: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func
};
var defaultProps = {
  editable: false,
  disabled: false
};

var TextField =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextField, _PureComponent);

  function TextField(props) {
    var _this;

    _classCallCheck(this, TextField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextField).call(this, props)); // forward ref need to move caret to the end

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (typeof onClick === 'function' && !disabled) {
        onClick(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (event) {
      var onInput = _this.props.onInput;
      if (typeof onInput === 'function') onInput(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var onBlur = _this.props.onBlur;
      if (typeof onBlur === 'function') onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (typeof onKeyDown === 'function') onKeyDown(event);
    });

    _this.nativeElement = _react["default"].createRef();
    return _this;
  }

  _createClass(TextField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editable = this.props.editable;

      if (prevProps.editable !== editable) {
        if (editable) this.moveCaretToEnd();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var editable = this.props.editable;

      if (editable) {
        this.moveCaretToEnd();
      }
    }
  }, {
    key: "moveCaretToEnd",
    value: function moveCaretToEnd() {
      var node = this.getNode();
      if (node) this.setEndOfContenteditable(node);
    }
  }, {
    key: "setEndOfContenteditable",
    value: function setEndOfContenteditable(contentEditableElement) {
      var range = null,
          selection = null; //Firefox, Chrome, Opera, Safari, IE 9+

      if (document.createRange) {
        range = document.createRange(); //Create a range (a range is a like the selection but invisible)

        range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
        // range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start

        selection = window.getSelection(); //get the selection object (allows you to change selection)

        selection.removeAllRanges(); //remove any selections already made

        selection.addRange(range); //make the range you have just created the visible selection
      } else if (document.selection) {
        range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)

        range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range

        range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start

        range.select(); //Select the range (make it the visible selection
      }
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.nativeElement.current;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          value = _this$props2.value,
          className = _this$props2.className,
          editable = _this$props2.editable;
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var attributes = {
        id: id,
        ref: this.nativeElement
      };
      var tagProps = {
        value: value,
        className: className,
        editable: editable,
        onClick: this.handleClick,
        onInput: this.handleInput,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        attributes: attributes,
        componentStyles: componentStyles
      };
      return _react["default"].createElement(_view["default"], tagProps);
    }
  }]);

  return TextField;
}(_react.PureComponent);

_defineProperty(TextField, "displayName", 'TextField');

_defineProperty(TextField, "propTypes", propTypes);

_defineProperty(TextField, "defaultProps", defaultProps);

var _default = TextField;
exports["default"] = _default;