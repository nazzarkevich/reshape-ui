"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DropdownSearch = _interopRequireDefault(require("./view/DropdownSearch.v"));
var _style = _interopRequireDefault(require("./style"));
var _utils = require("../utils");
var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));
var _dropdownSearch = require("./dropdownSearch.ct");
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
var isValueValid = function isValueValid(value) {
  return typeof value === 'string' || value === null;
};
var propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({})]),
  error: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  reset: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  listMaxHeight: _propTypes["default"].string,
  emptyListTitle: _propTypes["default"].string,
  resetId: _propTypes["default"].string,
  // TODO time decision, need to add dynamic position calculation
  listPosition: _propTypes["default"].string,
  queryPlaceholder: _propTypes["default"].string,
  showToggleButton: _propTypes["default"].bool,
  hidden: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,
  onKeyDown: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func,
  onInputChange: _propTypes["default"].func,
  elementRef: _propTypes["default"].func,
  onActionButtonClick: _propTypes["default"].func,
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
  reset: false,
  error: false,
  hidden: false,
  disabled: false,
  freeSolo: false,
  options: [],
  resetId: _dropdownSearch.RESET_ID,
  showToggleButton: false,
  emptyListTitle: 'Select Item',
  queryPlaceholder: 'Select Item'
};
var DropdownSearch = /*#__PURE__*/function (_Component) {
  _inherits(DropdownSearch, _Component);
  var _super = _createSuper(DropdownSearch);
  function DropdownSearch(props) {
    var _this;
    _classCallCheck(this, DropdownSearch);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "resetState", function () {
      _this.setState({
        query: '',
        error: false,
        isOpen: false,
        optionIndex: 0,
        selectedId: null
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleListItemClick", function (_ref) {
      var id = _ref.id;
      return function (event) {
        event.persist();
        var actionButton = event.target.closest(".".concat(_dropdownSearch.ACTION_BTN_CLASS));
        if (actionButton) _this.handleActionButtonClick(id);
        if (!actionButton) {
          // need to prevent closing while clicking on action button
          _this.setState({
            event: event
          });
          _this.handleChange(id);
          _this.close();
        }
      };
    });
    _defineProperty(_assertThisInitialized(_this), "getElementById", function (id) {
      var options = _this.props.options;
      var element = null;
      if (id) {
        element = options.find(function (item) {
          return item.id === id;
        });
      }
      return element;
    });
    _defineProperty(_assertThisInitialized(_this), "isOptionSelected", function (id) {
      var selectedId = _this.state.selectedId;
      var result = false;
      if (selectedId && id) result = selectedId === id;
      return result;
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
    _defineProperty(_assertThisInitialized(_this), "handleActionButtonClick", function (listItemId) {
      var onActionButtonClick = _this.props.onActionButtonClick;
      if (typeof onActionButtonClick === 'function') {
        onActionButtonClick(listItemId);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleChange", function (selectedId) {
      var onChange = _this.props.onChange;
      if (typeof onChange === 'function') {
        var selectedElement = _this.getElementById(selectedId);
        onChange(selectedElement);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleTitleClick", function () {
      var disabled = _this.props.disabled;
      if (!disabled) {
        _this.setState({
          isOpen: true
        }, _this.focusInput);
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
    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      var onKeyPress = _this.props.onKeyPress;
      if (typeof onKeyPress === 'function') {
        onKeyPress(event);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
      }
      _this.manageKeyDown(event);
    });
    _defineProperty(_assertThisInitialized(_this), "manageKeyDown", function (event) {
      var _this$state = _this.state,
        optionIndex = _this$state.optionIndex,
        options = _this$state.options;
      var key = event.key;
      if (key === _constants.KEY.ESCAPE) _this.close();
      if (key === _constants.KEY.ENTER) {
        var option = _this.findOptionByIndex(optionIndex);
        if (option) {
          _this.handleListItemClick(option)(event);
        } else {
          _this.close();
        }
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
            listItem.scrollIntoView(_objectSpread(_objectSpread({}, _dropdownSearch.scrollIntoViewOptions), {}, {
              block: 'end'
            }));
          }
          if (listItemTop < listTop) {
            listItem.scrollIntoView(_dropdownSearch.scrollIntoViewOptions);
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
    _defineProperty(_assertThisInitialized(_this), "handleOutsideClick", function (event) {
      if (_this.state.isOpen && !_this.root.contains(event.target)) {
        _this.close();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "inputRef", function (el) {
      _this.input = el;
    });
    _defineProperty(_assertThisInitialized(_this), "listRef", function (el) {
      _this.listElement = el;
    });
    _defineProperty(_assertThisInitialized(_this), "rootRef", function (el) {
      var elementRef = _this.props.elementRef;
      if (typeof elementRef === 'function') {
        elementRef(el);
      }
      _this.root = el;
    });
    _this.state = {
      query: '',
      selectedId: null,
      optionIndex: 0,
      isOpen: props.open,
      error: props.error,
      options: props.options
    };
    return _this;
  }
  _createClass(DropdownSearch, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      var _this$state2 = this.state,
        selectedId = _this$state2.selectedId,
        query = _this$state2.query;
      var _this$props = this.props,
        error = _this$props.error,
        resetId = _this$props.resetId,
        options = _this$props.options,
        open = _this$props.open;
      if (prevState.selectedId !== selectedId && selectedId === resetId) {
        this.resetState();
      }
      if (prevState.query !== query) {
        // need to reset optionIndex for navigation
        this.setState({
          options: this.filterOptions(),
          optionIndex: 0
        });
      }
      if (!(0, _isEqual2["default"])(prevProps.options, options)) {
        this.setState({
          options: options
        });
      }
      if (prevProps.error !== error) {
        this.setState({
          error: error
        });
      }
      if (prevProps.open !== open) {
        this.setState({
          isOpen: open
        }, function () {
          if (_this2.state.isOpen) _this2.focusInput();
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // need because can mount without triggering open event
      this.focusInput();
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

    // https://stackoverflow.com/questions/42089795/reactjs-cant-set-state-from-an-event-with-event-persist
  }, {
    key: "close",
    value: function close() {
      this.setState({
        query: '',
        isOpen: false,
        optionIndex: 0
      });
    }
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
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var _this$props2 = this.props,
        applied = _this$props2.applied,
        className = _this$props2.className,
        listMaxHeight = _this$props2.listMaxHeight,
        emptyListTitle = _this$props2.emptyListTitle,
        queryPlaceholder = _this$props2.queryPlaceholder,
        showToggleButton = _this$props2.showToggleButton;
      var _this$state3 = this.state,
        error = _this$state3.error,
        isOpen = _this$state3.isOpen,
        options = _this$state3.options,
        selectedId = _this$state3.selectedId,
        optionIndex = _this$state3.optionIndex;
      var dropdownProps = {
        error: error,
        applied: applied,
        isOpen: isOpen,
        options: options,
        className: className,
        selectedId: selectedId,
        optionIndex: optionIndex,
        showToggleButton: showToggleButton,
        emptyListTitle: emptyListTitle,
        queryPlaceholder: queryPlaceholder,
        listMaxHeight: listMaxHeight,
        onActionButtonClick: this.handleActionButtonClick,
        selectedElement: this.getElementById(selectedId),
        onTitleClick: this.handleTitleClick,
        isOptionFocused: this.isOptionFocused,
        isOptionActive: this.isOptionActive,
        isOptionInactive: this.isOptionInactive,
        isOptionSelected: this.isOptionSelected,
        onToggleButtonClick: this.handleToggleButtonClick,
        onListItemClick: this.handleListItemClick,
        onInputChange: this.handleQueryChange,
        onDocumentClick: this.handleOutsideClick,
        onKeyPress: this.handleKeyPress,
        onKeyDown: this.handleKeyDown,
        rootRef: this.rootRef,
        listRef: this.listRef,
        queryRef: this.inputRef,
        componentStyles: componentStyles
      };
      return /*#__PURE__*/_react["default"].createElement(_DropdownSearch["default"], dropdownProps);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value:
    // need to connect parent component state with local state
    function getDerivedStateFromProps(nextProps, prevState) {
      var value = nextProps.value;
      if (isValueValid(value) && value !== prevState.selectedId) {
        return {
          query: '',
          selectedId: value
        };
      }
      return null;
    }
  }]);
  return DropdownSearch;
}(_react.Component);
_defineProperty(DropdownSearch, "displayName", 'DropdownSearch');
_defineProperty(DropdownSearch, "defaultProps", defaultProps);
_defineProperty(DropdownSearch, "propTypes", propTypes);
var _default = DropdownSearch;
exports["default"] = _default;