"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = _interopRequireDefault(require("./style"));
var _view = _interopRequireDefault(require("./view"));
var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _platform = require("../utils/platform");
var _controllers = require("../controllers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
var Markers = /*#__PURE__*/function (_PureComponent) {
  _inherits(Markers, _PureComponent);
  var _super = _createSuper(Markers);
  function Markers(props) {
    var _this;
    _classCallCheck(this, Markers);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "handleCmdClick", function (event) {
      var target = event.target;
      var id = target.dataset.id;
      _this.setState({
        markerList: [id]
      }, _this.onChange);
    });
    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var target = event.target,
        nativeEvent = event.nativeEvent;
      var id = target.dataset.id;
      var markerList = _this.state.markerList;
      var platform = (0, _platform.getPlatform)();
      if ((0, _platform.isMacOS)(platform) && (0, _controllers.isCmd)(nativeEvent) || (0, _platform.isWindows)(platform) && (0, _controllers.isCtrl)(nativeEvent)) {
        _this.handleCmdClick(event);
      } else {
        if (id && markerList.includes(id)) {
          _this.setState(function (prevState) {
            return {
              markerList: prevState.markerList.filter(function (marker) {
                return marker !== id;
              })
            };
          }, _this.onChange);
        } else {
          _this.setState(function (prevState) {
            return {
              markerList: [].concat(_toConsumableArray(prevState.markerList), [id])
            };
          }, _this.onChange);
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onChange", function () {
      var onChange = _this.props.onChange;
      var markerList = _this.state.markerList;
      if (typeof onChange === 'function') {
        onChange(markerList);
      }
    });
    _this.state = {
      markerList: props.value
    };
    return _this;
  }
  _createClass(Markers, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.props.value;
      // Bind to parent component state
      if (!(0, _isEqual2["default"])(prevProps.value, value)) {
        this.setState({
          markerList: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var markerList = this.state.markerList;
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var props = _objectSpread(_objectSpread({}, this.props), {}, {
        markerList: markerList,
        onClick: this.handleClick,
        componentStyles: componentStyles
      });
      return /*#__PURE__*/_react["default"].createElement(_view["default"], props);
    }
  }]);
  return Markers;
}(_react.PureComponent);
_defineProperty(Markers, "displayName", 'Markers');
_defineProperty(Markers, "propTypes", {
  crossAxisDegree: _propTypes["default"].number,
  mainAxisDegree: _propTypes["default"].number,
  hideCrossAxis: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  secondary: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  value: _propTypes["default"].arrayOf(_propTypes["default"].string),
  id: _propTypes["default"].string
});
_defineProperty(Markers, "defaultProps", {
  value: [],
  hideCrossAxis: false
});
var _default = Markers;
exports["default"] = _default;