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
var _utils = require("../utils");
var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));
var _autocomplete = require("./autocomplete.ct");
var _constants = require("../constants");
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
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
// const isValueValid = value => typeof value === 'string' || value === null;

var propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({})]),
  error: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  freeSolo: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired,
  onKeyDown: _propTypes["default"].func,
  onInputChange: _propTypes["default"].func,
  elementRef: _propTypes["default"].func,
  showDeleteButton: _propTypes["default"].bool,
  onActionIconClick: _propTypes["default"].func,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })).isRequired,
  inactiveOptions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  activeOptions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  applied: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool])
};
var defaultProps = {
  open: false,
  error: false,
  disabled: false,
  // If true, the Autocomplete is free solo,
  // meaning that the user input is not bound to provided options.
  freeSolo: false,
  options: [],
  placeholder: 'Select Item',
  showDeleteButton: true
};

// const getSuggestedOption = (options, query) => {
//     if (options && !options.length && query !== '') {
//         return [
//             {
//                 id:   'create',
//                 name: `create ${query}`
//             }
//         ];
//     }
//
//     return options;
// };
var Autocomplete = /*#__PURE__*/function (_Component) {
  _inherits(Autocomplete, _Component);
  var _super = _createSuper(Autocomplete);
  function Autocomplete(props) {
    var _this;
    _classCallCheck(this, Autocomplete);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "addEventListeners", function () {
      document.addEventListener(_constants.EVENT.CLICK, _this.handleOutsideClick);
    });
    _defineProperty(_assertThisInitialized(_this), "removeEventListeners", function () {
      document.removeEventListener(_constants.EVENT.CLICK, _this.handleOutsideClick);
    });
    _defineProperty(_assertThisInitialized(_this), "handleListItemClick", function (_ref) {
      var id = _ref.id,
        name = _ref.name;
      return function (event) {
        _this.handleChange(event, {
          id: id,
          name: name
        });
        _this.close();
      };
    });
    _defineProperty(_assertThisInitialized(_this), "handleActionIconClick", function (id) {
      return function (event) {
        var onActionIconClick = _this.props.onActionIconClick;
        if (typeof onActionIconClick === 'function') {
          onActionIconClick(event, id);
        }
      };
    });
    _defineProperty(_assertThisInitialized(_this), "isOptionSelected", function (id) {
      var value = _this.props.value;
      return value === id;
    });
    _defineProperty(_assertThisInitialized(_this), "isOptionFocused", function (index) {
      var optionIndex = _this.state.optionIndex;
      return optionIndex === index;
    });
    _defineProperty(_assertThisInitialized(_this), "isOptionActive", function (id) {
      var activeOptions = _this.props.activeOptions;
      var result = false;
      if (activeOptions && activeOptions.length) {
        result = activeOptions.find(function (optionId) {
          return optionId === id;
        });
      }
      return Boolean(result);
    });
    _defineProperty(_assertThisInitialized(_this), "isOptionInactive", function (id) {
      var inactiveOptions = _this.props.inactiveOptions;
      var result = false;
      if (inactiveOptions && inactiveOptions.length) {
        result = inactiveOptions.find(function (optionId) {
          return optionId === id;
        });
      }
      return Boolean(result);
    });
    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, value) {
      var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _autocomplete.REASON.SELECT;
      var onChange = _this.props.onChange;
      if (typeof onChange === 'function') {
        onChange(event, value, reason);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleToggleButtonClick", function () {
      _this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      }, _this.focusInput);
    });
    _defineProperty(_assertThisInitialized(_this), "handleQueryChange", function (event) {
      var onInputChange = _this.props.onInputChange;
      if (typeof onInputChange === 'function') {
        onInputChange(event);
      }
      _this.setState({
        query: event.target.value
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
      }
      _this.manageKeyDown(event);
    });
    _defineProperty(_assertThisInitialized(_this), "handleInputFocus", function () {
      var disabled = _this.props.disabled;
      if (!_this.state.isOpen && !disabled) {
        _this.setState({
          isOpen: true
        }, _this.focusInput);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleEnterKeyDown", function (event) {
      var freeSolo = _this.props.freeSolo;
      var _this$state = _this.state,
        optionIndex = _this$state.optionIndex,
        query = _this$state.query;
      var option = _this.findOptionByIndex(optionIndex);
      if (option) {
        _this.handleListItemClick(option)(event);
        _this.close();
      }
      if (!option && freeSolo) {
        _this.handleChange(event, query, _autocomplete.REASON.CREATE);
        _this.close();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "manageKeyDown", function (event) {
      var _this$state2 = _this.state,
        optionIndex = _this$state2.optionIndex,
        options = _this$state2.options;
      var key = event.key;
      if (key === _constants.KEY.ESCAPE) _this.close();
      if (key === _constants.KEY.ENTER) {
        _this.handleEnterKeyDown(event);
      }

      // prevent moving caret to the start
      if (key === _constants.KEY.ARROW_UP) event.preventDefault();
      // arrow up/down button should select next/previous list element
      if (key === _constants.KEY.ARROW_UP && optionIndex > 0) {
        _this.decrementOptionIndex();
      }
      if (key === _constants.KEY.ARROW_DOWN && optionIndex < options.length - 1) {
        _this.incrementOptionIndex();
      }
      if (key === _constants.KEY.ARROW_UP || key === _constants.KEY.ARROW_DOWN) {
        _this.scrollToItem(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "scrollToItem", function (event) {
      var optionIndex = _this.state.optionIndex;
      var options = _this.state.options;
      var key = event.key;
      var itemIndex = optionIndex;
      if (key === _constants.KEY.ARROW_UP && optionIndex > 0) {
        // prevIndex
        itemIndex = optionIndex - 1;
      }
      if (key === _constants.KEY.ARROW_DOWN && optionIndex < options.length - 1) {
        // nextIndex
        itemIndex = optionIndex + 1;
      }
      if (_this.listElement) {
        var listChildren = Array.from(_this.listElement.childNodes);
        var listItem = listChildren.find(function (item, index) {
          return index === itemIndex;
        });
        if (listItem) {
          var listDimensions = _this.listElement.getBoundingClientRect();
          var listItemDimensions = listItem.getBoundingClientRect();
          var listItemTop = listItemDimensions.top;
          var listHeight = listDimensions.height;
          var listTop = listDimensions.top;
          if (listItemTop > listHeight) {
            listItem.scrollIntoView(_objectSpread(_objectSpread({}, _autocomplete.scrollIntoViewOptions), {}, {
              block: 'end'
            }));
          }
          if (listItemTop < listTop) {
            listItem.scrollIntoView(_autocomplete.scrollIntoViewOptions);
          }
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "findOptionByIndex", function (optionIndex) {
      var options = _this.state.options;
      return options.find(function (item, index) {
        return optionIndex === index;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "incrementOptionIndex", function () {
      _this.setState(function (prevState) {
        return {
          optionIndex: prevState.optionIndex + 1
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "decrementOptionIndex", function () {
      _this.setState(function (prevState) {
        return {
          optionIndex: prevState.optionIndex - 1
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "getSelectedOption", function () {
      var options = _this.props.options;
      return options.find(_this.isOptionSelected);
    });
    _defineProperty(_assertThisInitialized(_this), "handleOutsideClick", function (event) {
      if (_this.state.isOpen && _this.root && !_this.root.contains(event.target)) {
        _this.close();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "inputRef", function (el) {
      _this.input = el;
    });
    _defineProperty(_assertThisInitialized(_this), "listRef", function (el) {
      _this.listElement = el;
    });
    _defineProperty(_assertThisInitialized(_this), "setRootRef", function (el) {
      var elementRef = _this.props.elementRef;
      if (typeof elementRef === 'function') {
        elementRef(el);
      }
      _this.root = el;
    });
    _this.state = {
      query: null,
      optionIndex: -1,
      isOpen: props.open,
      options: props.options
    };
    return _this;
  }
  _createClass(Autocomplete, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      var query = this.state.query;
      var _this$props = this.props,
        options = _this$props.options,
        open = _this$props.open;

      // need to reset optionIndex for navigation
      if (query !== null && prevState.query !== query) {
        this.setState({
          options: this.filterOptions()
        });
      }

      // TODO check this
      if (!(0, _isEqual2["default"])(prevProps.options, options)) {
        this.setState({
          options: options
        });
      }
      if (prevProps.open !== open) {
        this.setState({
          isOpen: open
        }, function () {
          if (_this2.state.isOpen) _this2.focusInput();
        });
      }
      if (this.state.isOpen && !prevState.isOpen) {
        this.addEventListeners();
      }
      if (!this.state.isOpen && prevState.isOpen) {
        this.removeEventListeners();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.input.blur();
      this.setState({
        // TODO think about resetting query state after closing
        query: '',
        isOpen: false,
        optionIndex: -1
      });
    }
  }, {
    key: "filterOptions",
    value: function filterOptions() {
      var query = this.state.query;
      var options = this.props.options;
      var pattern = new RegExp((0, _utils.escapeRegExp)(query), 'ig');
      return options.filter(function (item) {
        return item.name.match(pattern);
      });
    }

    // TODO remove it later
    // https://stackoverflow.com/questions/42089795/reactjs-cant-set-state-from-an-event-with-event-persist
    // handleListItemClick = ({ id }) => event => {
    //     event.persist();
    //
    //     const actionButton = event.target.closest(`.${ACTION_BTN_CLASS}`);
    //
    //     if (actionButton) this.handleActionButtonClick(id);
    //
    //     if (!actionButton) {
    //         // need to prevent closing while clicking on action button
    //         this.setState({ event });
    //
    //         this.handleChange(event, id);
    //
    //         this.close();
    //     }
    // };
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (this.input !== undefined && this.input !== null) {
        this.input.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        error = _this$props2.error,
        value = _this$props2.value,
        applied = _this$props2.applied,
        className = _this$props2.className,
        secondary = _this$props2.secondary,
        placeholder = _this$props2.placeholder,
        showDeleteButton = _this$props2.showDeleteButton;
      var _this$state3 = this.state,
        query = _this$state3.query,
        isOpen = _this$state3.isOpen,
        options = _this$state3.options,
        optionIndex = _this$state3.optionIndex;
      var styles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var inputValue = query || query === '' ? query : value;
      var props = {
        error: error,
        applied: applied,
        isOpen: isOpen,
        options: options,
        className: className,
        secondary: secondary,
        inputValue: inputValue,
        optionIndex: optionIndex,
        placeholder: placeholder,
        showDeleteButton: showDeleteButton,
        isOptionFocused: this.isOptionFocused,
        isOptionActive: this.isOptionActive,
        isOptionInactive: this.isOptionInactive,
        isOptionSelected: this.isOptionSelected,
        onActionIconClick: this.handleActionIconClick,
        onToggleButtonClick: this.handleToggleButtonClick,
        onListItemClick: this.handleListItemClick,
        onInputChange: this.handleQueryChange,
        onInputFocus: this.handleInputFocus,
        onKeyDown: this.handleKeyDown,
        setRootRef: this.setRootRef,
        listRef: this.listRef,
        inputRef: this.inputRef,
        styles: styles
      };
      return /*#__PURE__*/_react["default"].createElement(_view["default"], props);
    }
  }]);
  return Autocomplete;
}(_react.Component);
_defineProperty(Autocomplete, "displayName", 'Autocomplete');
_defineProperty(Autocomplete, "defaultProps", defaultProps);
_defineProperty(Autocomplete, "propTypes", propTypes);
var _default = Autocomplete;
exports["default"] = _default;