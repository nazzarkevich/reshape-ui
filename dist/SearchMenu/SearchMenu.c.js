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

var _Icon = _interopRequireDefault(require("../Icon"));

var _List = _interopRequireDefault(require("../List"));

var _ListItem = _interopRequireDefault(require("../ListItem"));

var _ListItemText = _interopRequireDefault(require("../ListItemText"));

var _utils = require("../utils");

var _constants = require("../constants");

var _utils2 = require("./utils");

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

var propTypes = {
  open: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  className: _propTypes["default"].string,
  inputSize: _propTypes["default"].string,
  onClose: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  elementRef: _propTypes["default"].func,
  onInputChange: _propTypes["default"].func,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })),
  searchOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  })),
  inactiveOptions: _propTypes["default"].arrayOf(_propTypes["default"].string)
};
var defaultProps = {
  options: [],
  searchOptions: [],
  inactiveOptions: [],
  placeholder: 'Add Element'
};

var SearchMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SearchMenu, _PureComponent);

  function SearchMenu(props) {
    var _this;

    _classCallCheck(this, SearchMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      _this.resetState();
    });

    _defineProperty(_assertThisInitialized(_this), "resetState", function () {
      var options = _this.props.options;

      _this.setState({
        query: null,
        selectedIds: [],
        depthLevel: 0,
        optionIndex: 0,
        searchOptions: options,
        selectedOption: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var onKeyDown = _this.props.onKeyDown;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
      }

      _this.manageKeyDown(event);
    });

    _defineProperty(_assertThisInitialized(_this), "manageKeyDown", function (event) {
      var query = _this.state.query;
      if (!query) _this.manageSublistNavigation(event);
      if (query) _this.manageListNavigation(event);
    });

    _defineProperty(_assertThisInitialized(_this), "manageSublistNavigation", function (event) {
      var _this$state = _this.state,
          searchOptions = _this$state.searchOptions,
          optionIndex = _this$state.optionIndex,
          depthLevel = _this$state.depthLevel,
          selectedOption = _this$state.selectedOption;
      var key = event.key;
      if (key === _constants.KEY.ESCAPE) _this.closeMenu();
      if (key === _constants.KEY.ENTER) _this.handleItemClick(selectedOption)(event); // arrow up/down button should select next/previous list element

      if (key === _constants.KEY.ARROW_UP && optionIndex > 0) {
        var prevOptionIndex = optionIndex - 1;
        var prevOption = searchOptions[prevOptionIndex];

        _this.handleSelectedId(prevOption.id, depthLevel)();

        _this.decrementOptionIndex();

        _this.setOption(prevOption);
      } // set initial values if option is not selected


      if (key === _constants.KEY.ARROW_DOWN && !selectedOption) {
        var firstOption = searchOptions[0];

        _this.handleSelectedId(firstOption.id, 0)();

        _this.setOption(firstOption);
      }

      if (key === _constants.KEY.ARROW_DOWN && selectedOption && optionIndex < searchOptions.length - 1) {
        var nextOptionIndex = optionIndex + 1;
        var nextOption = searchOptions[nextOptionIndex];

        _this.handleSelectedId(nextOption.id, depthLevel)();

        _this.incrementOptionIndex();

        _this.setOption(nextOption);
      }

      if (key === _constants.KEY.ARROW_RIGHT) {
        if (_this.hasOptionSublist(selectedOption)) {
          var sublist = selectedOption.sublist;

          _this.setState(function (prevState) {
            return {
              optionIndex: 0,
              depthLevel: prevState.depthLevel + 1,
              searchOptions: sublist,
              selectedOption: sublist[0]
            };
          }, function () {
            var _this$state2 = _this.state,
                optionIndex = _this$state2.optionIndex,
                depthLevel = _this$state2.depthLevel;

            _this.handleSelectedId(sublist[optionIndex].id, depthLevel)();
          });
        }
      }

      if (key === _constants.KEY.ARROW_LEFT) {
        var _selectedOption = _this.state.selectedOption;

        var _findRecursivelyOptio = (0, _utils2.findRecursivelyOptionsById)(_this.props.options, _selectedOption.id),
            options = _findRecursivelyOptio.options,
            _optionIndex = _findRecursivelyOptio.optionIndex;

        var _prevOption = options.find(function (option, index) {
          return index === _optionIndex;
        });

        if ( // return to previous list if optionIndex === 0
        _this.state.optionIndex === 0 && _this.hasOptionSublist(_prevOption)) {
          _this.setState(function (prevState) {
            return {
              depthLevel: prevState.depthLevel - 1,
              optionIndex: _optionIndex,
              // options from the same level
              searchOptions: options,
              selectedOption: _prevOption
            };
          }, function () {
            _this.removeSelectedId(_selectedOption.id)();
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "manageListNavigation", function (event) {
      var key = event.key;
      var _this$state3 = _this.state,
          options = _this$state3.options,
          optionIndex = _this$state3.optionIndex;
      if (key === _constants.KEY.ESCAPE) _this.closeMenu();

      if (key === _constants.KEY.ENTER) {
        var option = _this.findOptionByIndex();

        if (option) _this.handleItemClick(option)(event);
      } // prevent moving caret to the start


      if (key === _constants.KEY.ARROW_UP) event.preventDefault(); // arrow up/down button should select next/previous list element

      if (key === _constants.KEY.ARROW_UP && optionIndex > 0) {
        _this.decrementOptionIndex();
      }

      if (key === _constants.KEY.ARROW_DOWN && optionIndex < options.length - 1) {
        _this.incrementOptionIndex();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectedId", function (id, depthLevel) {
      return function () {
        var selectedIds = _this.state.selectedIds;

        var updatedArray = _toConsumableArray(selectedIds);

        updatedArray[depthLevel] = id;

        _this.setState({
          selectedIds: updatedArray,
          depthLevel: depthLevel
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "removeSelectedId", function (id) {
      return function () {
        var selectedIds = _this.state.selectedIds;
        var updatedArray = selectedIds.filter(function (selectedId) {
          return selectedId !== id;
        });

        _this.setState({
          selectedIds: updatedArray
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "hasOptionSublist", function (option) {
      var sublist = option.sublist;
      return Boolean(sublist && Array.isArray(sublist) && sublist.length);
    });

    _defineProperty(_assertThisInitialized(_this), "findOptionByIndex", function () {
      var _this$state4 = _this.state,
          options = _this$state4.options,
          optionIndex = _this$state4.optionIndex;
      return options.find(function (item, index) {
        return optionIndex === index;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setOption", function (option) {
      _this.setState({
        selectedOption: option
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

    _defineProperty(_assertThisInitialized(_this), "isOptionFocused", function (id, depthLevel) {
      var selectedIds = _this.state.selectedIds;
      return selectedIds[depthLevel] === id;
    });

    _defineProperty(_assertThisInitialized(_this), "isOptionHovered", function (id) {
      var option = _this.findOptionByIndex();

      return option && option.id === id;
    });

    _defineProperty(_assertThisInitialized(_this), "isOptionInactive", function (id) {
      var inactiveOptions = _this.props.inactiveOptions;
      return inactiveOptions.includes(id);
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

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (listItem) {
      return function (event) {
        var onClose = _this.props.onClose;
        var id = listItem.id,
            name = listItem.name; // need because of nested structure

        event.stopPropagation();

        if (typeof onClose === 'function' && !_this.hasOptionSublist(listItem)) {
          onClose({
            id: id,
            name: name
          });

          _this.closeMenu();
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "renderMenuItem", function (item, depthLevel, componentStyles) {
      var _this$state5 = _this.state,
          query = _this$state5.query,
          selectedIds = _this$state5.selectedIds;
      var id = item.id,
          name = item.name,
          icon = item.icon,
          sublist = item.sublist;
      var isSublistExist = sublist && sublist.length;
      var listStyle = componentStyles.listStyle,
          iconStyle = componentStyles.iconStyle,
          arrowStyle = componentStyles.arrowStyle;
      var sublistElement = null,
          sublistIcon = null;

      if (isSublistExist) {
        sublistIcon = _react["default"].createElement(_Icon["default"], {
          disabled: _this.isOptionInactive(id),
          name: "arrow-right",
          style: arrowStyle
        });
      }

      if (isSublistExist && selectedIds[depthLevel] === id) {
        var nextDepthLevel = depthLevel + 1;

        var _this$getListDimensio = _this.getListDimensions(),
            width = _this$getListDimensio.width;

        var composedListStyle = _objectSpread({}, listStyle, {}, {
          left: "".concat(width, "px"),
          top: '-4px'
        });

        sublistElement = _react["default"].createElement(_List["default"], {
          key: "sublist-".concat(sublist.id),
          style: composedListStyle
        }, sublist.map(function (sublistItem) {
          return _this.renderMenuItem(sublistItem, nextDepthLevel, componentStyles);
        }));
      }

      return _react["default"].createElement(_ListItem["default"], {
        key: id,
        id: id,
        hover: query ? _this.isOptionHovered(id) : _this.isOptionFocused(id, depthLevel),
        onClick: _this.handleItemClick(item),
        onMouseLeave: _this.removeSelectedId(id),
        onMouseEnter: _this.handleSelectedId(id, depthLevel)
      }, sublistElement, icon && icon.name ? _react["default"].createElement(_Icon["default"], {
        disabled: _this.isOptionInactive(id),
        name: icon.name,
        style: iconStyle
      }) : null, _react["default"].createElement(_ListItemText["default"], {
        truncate: true,
        inactive: _this.isOptionInactive(id)
      }, name), sublistIcon);
    });

    _defineProperty(_assertThisInitialized(_this), "focusInput", function () {
      _this.inputElement.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", function (el) {
      _this.inputElement = el;
    });

    _defineProperty(_assertThisInitialized(_this), "listRef", function (el) {
      _this.listElement = el;
    });

    _defineProperty(_assertThisInitialized(_this), "rootRef", function (el) {
      _this.root = el;
      var elementRef = _this.props.elementRef;

      if (typeof elementRef === 'function') {
        elementRef(_this.root);
      }
    });

    _this.state = {
      query: null,
      selectedIds: ['2'],
      optionIndex: 0,
      depthLevel: 0,
      selectedOption: null,
      options: props.options,
      searchOptions: props.options
    };
    return _this;
  }

  _createClass(SearchMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var query = this.state.query;
      var open = this.props.open;

      if (prevState.query !== query) {
        this.setState({
          options: this.getOptions()
        });
      }

      if (prevProps.open !== open && open) {
        this.focusInput();
      }
    }
  }, {
    key: "filterOptions",
    value: function filterOptions(options) {
      var query = this.state.query;
      var pattern = new RegExp((0, _utils.escapeRegExp)(query), 'ig');
      return options.filter(function (item) {
        return item.name.match(pattern);
      });
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var query = this.state.query;
      var _this$props = this.props,
          options = _this$props.options,
          searchOptions = _this$props.searchOptions;
      var result = options || searchOptions;

      if (query && searchOptions.length) {
        result = this.filterOptions(searchOptions);
      } else if (query && options.length) {
        result = this.filterOptions(options);
      }

      return result;
    }
  }, {
    key: "getListDimensions",
    value: function getListDimensions() {
      return this.listElement.getBoundingClientRect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state6 = this.state,
          query = _this$state6.query,
          options = _this$state6.options;
      var _this$props2 = this.props,
          open = _this$props2.open,
          className = _this$props2.className,
          inputSize = _this$props2.inputSize,
          placeholder = _this$props2.placeholder;
      var componentStyles = (0, _compileStyles["default"])(_style["default"], this.props, this.state);
      var menuProps = {
        open: open,
        query: query,
        options: options,
        className: className,
        inputSize: inputSize,
        placeholder: placeholder,
        listRef: this.listRef,
        rootRef: this.rootRef,
        inputRef: this.inputRef,
        onKeyDown: this.manageKeyDown,
        renderMenuItem: this.renderMenuItem,
        onQueryChange: this.handleQueryChange,
        componentStyles: componentStyles
      };
      return _react["default"].createElement(_view["default"], menuProps);
    }
  }]);

  return SearchMenu;
}(_react.PureComponent);

_defineProperty(SearchMenu, "displayName", 'SearchMenu');

_defineProperty(SearchMenu, "propTypes", propTypes);

_defineProperty(SearchMenu, "defaultProps", defaultProps);

var _default = SearchMenu;
exports["default"] = _default;