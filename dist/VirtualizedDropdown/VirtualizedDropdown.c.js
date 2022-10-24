"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _view = _interopRequireDefault(require("./view"));

var _constants = require("../constants");

var _style = _interopRequireDefault(require("./style"));

var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));

var _utils = require("../utils");

var _dropdownSearch = require("./dropdownSearch.ct");

var _utils2 = require("./utils");

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

var VirtualizedDropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(VirtualizedDropdown, _Component);

  function VirtualizedDropdown(props) {
    var _this;

    _classCallCheck(this, VirtualizedDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VirtualizedDropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "resetState", function () {
      _this.setState({
        query: null,
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
          // need to set optionIndex for navigation
          // return index from method
          var optionIndex = _this.findOptionIndexById(id);

          _this.setState({
            selectedId: id,
            optionIndex: optionIndex,
            event: event
          }, _this.handleChange);

          _this.hideList();
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

    _defineProperty(_assertThisInitialized(_this), "findOptionIndexById", function (id) {
      var options = _this.props.options;
      return options.findIndex(function (option) {
        return option.id === id;
      });
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

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      var onChange = _this.props.onChange;

      if (typeof onChange === 'function') {
        var selectedId = _this.state.selectedId;

        var selectedElement = _this.getElementById(selectedId);

        onChange(selectedElement);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTitleClick", function () {
      _this.setState({
        isOpen: true
      }, _this.focusInput);
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
      var value = event.target.value;

      if (typeof onInputChange === 'function') {
        onInputChange(event);
      }

      _this.setState({
        query: value
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
      var optionIndex = _this.state.optionIndex;
      var options = _this.state.options;
      var key = event.key;
      if (key === _constants.KEY.ESCAPE) _this.hideList();

      if (key === _constants.KEY.ENTER) {
        var option = _this.findOptionByIndex(optionIndex);

        if (option) {
          _this.handleListItemClick(option)(event);
        } else {
          _this.hideList();
        }
      } // prevent moving caret to the start


      if (key === _constants.KEY.ARROW_UP) event.preventDefault(); // arrow up/down button should select next/previous list element

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

      _this.listRef.current.scrollToItem(itemIndex);
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
        _this.hideList();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", function (el) {
      _this.input = el;
    });

    _defineProperty(_assertThisInitialized(_this), "rootRef", function (el) {
      var elementRef = _this.props.elementRef;

      if (typeof elementRef === 'function') {
        elementRef(el);
      }

      _this.root = el;
    });

    _this.state = {
      query: null,
      selectedId: props.value,
      isOpen: props.open,
      error: props.error,
      options: props.options,
      optionIndex: (0, _utils2.setInitialOptionIndex)(props)
    };
    _this.listRef = _react["default"].createRef();
    return _this;
  }

  _createClass(VirtualizedDropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$state = this.state,
          query = _this$state.query,
          isOpen = _this$state.isOpen;
      var _this$props = this.props,
          error = _this$props.error,
          options = _this$props.options,
          value = _this$props.value; // to connect external component state with local state
      // need to pass value as a prop

      if (prevProps.value !== value) {
        this.setState({
          selectedId: value
        });
      }

      if (prevState.query !== query && query) {
        this.setState({
          options: this.filterOptions()
        });
      }

      if (prevState.query !== query && !query) {
        this.setState({
          options: options
        });
      } // when dropdown is open and user is typing
      // reset optionIndex to the first element


      if (isOpen && prevState.query !== query) {
        this.setState({
          optionIndex: 0
        });
      }

      if (prevProps.error !== error) {
        this.setState({
          error: error
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
    } // https://stackoverflow.com/questions/42089795/reactjs-cant-set-state-from-an-event-with-event-persist

  }, {
    key: "hideList",
    value: function hideList() {
      this.setState({
        isOpen: false,
        query: null
      });
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (this.input && this.input !== null) {
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
          activeOptions = _this$props2.activeOptions,
          listMaxHeight = _this$props2.listMaxHeight,
          emptyListTitle = _this$props2.emptyListTitle,
          queryPlaceholder = _this$props2.queryPlaceholder,
          showToggleButton = _this$props2.showToggleButton;
      var _this$state2 = this.state,
          error = _this$state2.error,
          isOpen = _this$state2.isOpen,
          options = _this$state2.options,
          selectedId = _this$state2.selectedId,
          optionIndex = _this$state2.optionIndex;
      var dropdownProps = {
        error: error,
        applied: applied,
        isOpen: isOpen,
        options: (0, _utils2.sortByIds)(options, activeOptions),
        className: className,
        selectedId: selectedId,
        optionIndex: optionIndex,
        showToggleButton: showToggleButton,
        emptyListTitle: emptyListTitle,
        queryPlaceholder: queryPlaceholder,
        listMaxHeight: listMaxHeight,
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
      return _react["default"].createElement(_view["default"], dropdownProps);
    }
  }]);

  return VirtualizedDropdown;
}(_react.Component);

_defineProperty(VirtualizedDropdown, "displayName", 'VirtualizedDropdown');

_defineProperty(VirtualizedDropdown, "defaultProps", {
  value: null,
  open: false,
  error: false,
  hidden: false,
  options: [],
  activeOptions: [],
  showToggleButton: false,
  emptyListTitle: 'Select Item',
  queryPlaceholder: 'Select Item'
});

_defineProperty(VirtualizedDropdown, "propTypes", {
  open: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].oneOf([null])]),
  error: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  listMaxHeight: _propTypes["default"].string,
  emptyListTitle: _propTypes["default"].string,
  queryPlaceholder: _propTypes["default"].string,
  showToggleButton: _propTypes["default"].bool,
  hidden: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func,
  elementRef: _propTypes["default"].func,
  onActionButtonClick: _propTypes["default"].func,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })).isRequired,
  inactiveOptions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  activeOptions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  applied: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool])
});

var _default = VirtualizedDropdown;
exports["default"] = _default;