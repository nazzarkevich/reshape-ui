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

var _constants = require("../constants");

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

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (_ref) {
      var target = _ref.target;

      if (_this.state.open && !_this.root.contains(target)) {
        _this.setState({
          open: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTitleClick", function () {
      _this.setState(function (prevState) {
        return {
          open: !prevState.open
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionClick", function (listItem) {
      return function (event) {
        var onChange = _this.props.onChange;
        var id = listItem.id,
            name = listItem.name;

        if (typeof onChange === 'function') {
          onChange({
            id: id,
            name: name,
            event: event
          });

          _this.closeMenu();
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setRootRef", function (el) {
      _this.root = el;
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener(_constants.EVENT.CLICK, this.handleDocumentClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener(_constants.EVENT.CLICK, this.handleDocumentClick);
    }
  }, {
    key: "render",
    value: function render() {
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);

      var props = _objectSpread({}, this.state, {}, this.props, {
        componentStyles: componentStyles,
        setRootRef: this.setRootRef,
        onTitleClick: this.handleTitleClick,
        onOptionClick: this.handleOptionClick
      });

      return _react["default"].createElement(_view["default"], props);
    }
  }]);

  return Select;
}(_react.Component);

_defineProperty(Select, "displayName", 'Select');

_defineProperty(Select, "propTypes", {
  onChange: _propTypes["default"].func.isRequired,
  open: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].instanceOf(Element)
  })])
});

_defineProperty(Select, "defaultProps", {
  options: []
});

var _default = Select;
exports["default"] = _default;