"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("../List/style"));

var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));

var _utils = require("./utils");

var _virtualizedList = require("./virtualizedList.ct");

var _VirtualizedRow = _interopRequireDefault(require("../VirtualizedRow"));

var _reactWindow = require("react-window");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VirtualizedList =
/*#__PURE__*/
function (_Component) {
  _inherits(VirtualizedList, _Component);

  function VirtualizedList() {
    _classCallCheck(this, VirtualizedList);

    return _possibleConstructorReturn(this, _getPrototypeOf(VirtualizedList).apply(this, arguments));
  }

  _createClass(VirtualizedList, [{
    key: "render",
    value: function render() {
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var _this$props = this.props,
          options = _this$props.options,
          listRef = _this$props.listRef,
          selectedId = _this$props.selectedId,
          optionIndex = _this$props.optionIndex,
          listMaxHeight = _this$props.listMaxHeight,
          actionIconClass = _this$props.actionIconClass,
          onListItemClick = _this$props.onListItemClick,
          isOptionSelected = _this$props.isOptionSelected,
          isOptionActive = _this$props.isOptionActive,
          isOptionInactive = _this$props.isOptionInactive,
          isOptionFocused = _this$props.isOptionFocused,
          iconStyles = _this$props.iconStyles;
      var itemData = {
        options: options,
        selectedId: selectedId,
        optionIndex: optionIndex,
        actionIconClass: actionIconClass,
        onListItemClick: onListItemClick,
        isOptionActive: isOptionActive,
        isOptionSelected: isOptionSelected,
        isOptionInactive: isOptionInactive,
        isOptionFocused: isOptionFocused,
        iconStyles: iconStyles
      }; // need to use index
      // const initialOffset = optionIndex ? optionIndex * ITEM_HEIGHT : 0;

      return _react["default"].createElement(_reactWindow.FixedSizeList, {
        ref: listRef,
        itemData: itemData,
        itemSize: _virtualizedList.ITEM_HEIGHT,
        itemCount: options.length,
        className: "virtualized-list" // initialScrollOffset={initialOffset}
        ,
        height: (0, _utils.getListHeight)(listMaxHeight),
        style: _objectSpread({}, (0, _utils.normalizeStyles)(componentStyles))
      }, _VirtualizedRow["default"]);
    }
  }]);

  return VirtualizedList;
}(_react.Component);

_defineProperty(VirtualizedList, "propTypes", {
  listRef: _propTypes["default"].shape(),
  listMaxHeight: _propTypes["default"].number,
  isOptionActive: _propTypes["default"].func
});

var _default = VirtualizedList;
exports["default"] = _default;