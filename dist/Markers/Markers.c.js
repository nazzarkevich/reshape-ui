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

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _platform = require("../utils/platform");

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Markers =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Markers, _PureComponent);

  function Markers(props) {
    var _this;

    _classCallCheck(this, Markers);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Markers).call(this, props));

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
      var value = this.props.value; // Bind to parent component state

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

      var props = _objectSpread({}, this.props, {
        markerList: markerList,
        onClick: this.handleClick,
        componentStyles: componentStyles
      });

      return _react["default"].createElement(_view["default"], props);
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