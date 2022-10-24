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

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleListItemClick", function (listItem) {
      return function (event) {
        var _this$props = _this.props,
            onSelect = _this$props.onSelect,
            onClose = _this$props.onClose;
        var id = listItem.id,
            name = listItem.name;

        if (typeof onClose === 'function') {
          onClose({
            id: id,
            name: name,
            event: event
          });

          _this.closeMenu();
        }

        if (typeof onSelect === 'function') onSelect(id);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isInactive", function (id) {
      var inactiveOptions = _this.props.inactiveOptions;
      return inactiveOptions.includes(id);
    });

    _defineProperty(_assertThisInitialized(_this), "isAccent", function (id) {
      var accentOptions = _this.props.accentOptions;
      return accentOptions.includes(id);
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _isEqual2["default"])(this.props, nextProps) || !(0, _isEqual2["default"])(this.state, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onClick = _this$props2.onClick,
          options = _this$props2.options,
          innerRef = _this$props2.innerRef,
          className = _this$props2.className;
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);

      var menuProps = _objectSpread({}, this.state, {
        onClick: onClick,
        options: options,
        className: className,
        onListItemClick: this.handleListItemClick,
        isInactive: this.isInactive,
        isAccent: this.isAccent,
        componentStyles: componentStyles
      });

      return _react["default"].createElement(_view["default"], _extends({
        ref: innerRef
      }, menuProps));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var open = nextProps.open;

      if (open !== prevState.isOpen) {
        return {
          isOpen: open
        };
      }

      return null;
    }
  }]);

  return Menu;
}(_react.Component);

_defineProperty(Menu, "displayName", 'Menu');

_defineProperty(Menu, "propTypes", {
  open: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  className: _propTypes["default"].string,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].instanceOf(Element)
  })]),
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })),
  inactiveOptions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  accentOptions: _propTypes["default"].arrayOf(_propTypes["default"].string)
});

_defineProperty(Menu, "defaultProps", {
  options: [],
  accentOptions: [],
  inactiveOptions: []
});

var _default = Menu;
exports["default"] = _default;