"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("../style");

var _List = _interopRequireDefault(require("../../List"));

var _ListItem = _interopRequireDefault(require("../../ListItem"));

var _ListItemText = _interopRequireDefault(require("../../ListItemText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  open: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onKeyDown: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  setRootRef: _propTypes["default"].func,
  onTitleClick: _propTypes["default"].func,
  onOptionClick: _propTypes["default"].func,
  componentStyles: _propTypes["default"].shape(),
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    name: _propTypes["default"].string
  }))
};

var SelectView = function SelectView(props) {
  var open = props.open,
      value = props.value,
      options = props.options,
      className = props.className,
      setRootRef = props.setRootRef,
      onTitleClick = props.onTitleClick,
      onOptionClick = props.onOptionClick,
      componentStyles = props.componentStyles;
  var listStyle = componentStyles.listStyle,
      titleStyle = componentStyles.titleStyle,
      wrapperStyle = componentStyles.wrapperStyle,
      listItemStyle = componentStyles.listItemStyle,
      listItemTextStyle = componentStyles.listItemTextStyle;

  var optionList = _react["default"].createElement(_List["default"], {
    className: className,
    style: _objectSpread({}, listStyle, {
      width: wrapperStyle.width
    })
  }, options && options.map(function (option) {
    var id = option.id,
        name = option.name;
    var active = value === id;
    return _react["default"].createElement(_react.Fragment, {
      key: id
    }, _react["default"].createElement(_ListItem["default"], {
      key: id,
      style: listItemStyle,
      onClick: onOptionClick(option)
    }, _react["default"].createElement(_ListItemText["default"], {
      truncate: true,
      active: active,
      style: listItemTextStyle
    }, name)));
  }));

  return _react["default"].createElement(_style.Wrapper, {
    ref: setRootRef,
    styles: wrapperStyle
  }, _react["default"].createElement(_style.Title, {
    onClick: onTitleClick,
    styles: titleStyle
  }, value), open ? optionList : null);
};

SelectView.displayName = 'SelectView';
SelectView.propTypes = propTypes;
var _default = SelectView;
exports["default"] = _default;