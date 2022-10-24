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

var _switchIconButton = require("./switchIconButton.ct");

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

var SwitchIconButton =
/*#__PURE__*/
function (_Component) {
  _inherits(SwitchIconButton, _Component);

  function SwitchIconButton(props) {
    var _this;

    _classCallCheck(this, SwitchIconButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchIconButton).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleMouseOver", function () {
      return _this.setState({
        hover: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      return _this.setState({
        hover: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleIconClick", function (event) {
      var onIconClick = _this.props.onIconClick;

      if (typeof onIconClick === 'function') {
        onIconClick(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSwitchedIconClick", function (event) {
      var onSwitchedIconClick = _this.props.onSwitchedIconClick;

      if (typeof onSwitchedIconClick === 'function') {
        onSwitchedIconClick(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getIconColor", function (status) {
      return _switchIconButton.ICON_STATE[status];
    });

    _defineProperty(_assertThisInitialized(_this), "isStatusActive", function (status) {
      return status === _switchIconButton.ICON_STATUS.ACTIVE;
    });

    _this.state = {
      status: props.status,
      hover: false
    };
    return _this;
  }

  _createClass(SwitchIconButton, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hover = _this$state.hover,
          status = _this$state.status;
      var _this$props = this.props,
          id = _this$props.id,
          rotate = _this$props.rotate,
          iconColor = _this$props.iconColor,
          iconName = _this$props.iconName,
          className = _this$props.className,
          switchedIconName = _this$props.switchedIconName;
      var styles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var iconButtonProps = {
        id: id,
        rotate: rotate,
        iconName: iconName,
        hover: hover,
        status: status,
        className: className,
        iconColor: iconColor,
        switchedIconName: switchedIconName,
        onIconClick: this.handleIconClick,
        getIconColor: this.getIconColor,
        onMouseOver: this.handleMouseOver,
        onMouseLeave: this.handleMouseLeave,
        isStatusActive: this.isStatusActive,
        onSwitchedIconClick: this.handleSwitchedIconClick,
        styles: styles
      };
      return _react["default"].createElement(_view["default"], iconButtonProps);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.status !== nextProps.status) {
        return {
          status: nextProps.status
        };
      }

      return null;
    }
  }]);

  return SwitchIconButton;
}(_react.Component);

_defineProperty(SwitchIconButton, "displayName", 'SwitchIconButton');

_defineProperty(SwitchIconButton, "propTypes", {
  id: _propTypes["default"].string,
  style: _propTypes["default"].shape(),
  rotate: _propTypes["default"].number,
  status: _propTypes["default"].string,
  iconName: _propTypes["default"].string,
  iconColor: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onIconClick: _propTypes["default"].func,
  switchedIconName: _propTypes["default"].string,
  onSwitchedIconClick: _propTypes["default"].func
});

_defineProperty(SwitchIconButton, "defaultProps", {
  style: {},
  status: _switchIconButton.ICON_STATUS.INITIAL
});

var _default = SwitchIconButton;
exports["default"] = _default;