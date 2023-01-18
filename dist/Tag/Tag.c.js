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
var Tag = /*#__PURE__*/function (_PureComponent) {
  _inherits(Tag, _PureComponent);
  var _super = _createSuper(Tag);
  function Tag(props) {
    var _this;
    _classCallCheck(this, Tag);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var onClick = _this.props.onClick;
      if (typeof onClick === 'function') {
        onClick(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleContextMenuClick", function (event) {
      var onContextMenu = _this.props.onContextMenu;
      if (typeof onContextMenu === 'function') {
        onContextMenu(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleInput", function (event) {
      var onInput = _this.props.onInput;
      var target = event.target;
      if (target && typeof onInput === 'function') {
        onInput(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var onBlur = _this.props.onBlur;
      if (typeof onBlur === 'function') {
        onBlur(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
      }
    });
    _this.state = {
      editable: props.editable
    };
    // forward ref need to move caret to the end
    _this.nativeElement = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _createClass(Tag, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editable = this.props.editable;
      if (prevProps.editable !== editable) {
        if (editable) this.moveCaretToEnd();
        this.setState({
          editable: editable
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        editable = _this$props.editable,
        elementRef = _this$props.elementRef;
      if (editable) {
        this.moveCaretToEnd();
      }
      if (typeof elementRef === 'function') {
        elementRef(this.getNode());
      }
    }
  }, {
    key: "moveCaretToEnd",
    value: function moveCaretToEnd() {
      var node = this.getNode();
      if (node) {
        this.setEndOfContenteditable(node);
      }
    }
  }, {
    key: "setEndOfContenteditable",
    value: function setEndOfContenteditable(contentEditableElement) {
      var range = null,
        selection = null;
      //Firefox, Chrome, Opera, Safari, IE 9+
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
        children = _this$props2.children,
        editable = _this$props2.editable,
        className = _this$props2.className,
        startIcon = _this$props2.startIcon,
        onMouseDown = _this$props2.onMouseDown;
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var attributes = {
        id: id,
        ref: this.nativeElement
      };
      var tagProps = {
        startIcon: startIcon,
        className: className,
        editable: editable,
        onMouseDown: onMouseDown,
        onClick: this.handleClick,
        onInput: this.handleInput,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onContextMenu: this.handleContextMenuClick,
        componentStyles: componentStyles,
        attributes: attributes
      };
      return /*#__PURE__*/_react["default"].createElement(_view["default"], tagProps, children);
    }
  }]);
  return Tag;
}(_react.PureComponent);
_defineProperty(Tag, "displayName", 'Tag');
_defineProperty(Tag, "propTypes", {
  id: _propTypes["default"].string,
  className: _propTypes["default"].string,
  startIcon: _propTypes["default"].node,
  active: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  editable: _propTypes["default"].bool,
  primary: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  validate: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onInput: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  elementRef: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onContextMenu: _propTypes["default"].func
});
_defineProperty(Tag, "defaultProps", {
  editable: false
});
var _default = Tag;
exports["default"] = _default;