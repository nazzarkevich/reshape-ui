"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireWildcard(require("./style"));

var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  value: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
};

var Tabs = function Tabs(props) {
  var value = props.value,
      className = props.className,
      children = props.children,
      onChange = props.onChange;
  var styles = (0, _compileStyles["default"])(_style["default"], props);
  return _react["default"].createElement(_style.TabsWrapper, {
    className: className,
    styles: styles
  }, _react["default"].Children.map(children, function (child) {
    return _react["default"].cloneElement(child, {
      active: value === child.props.value,
      onChange: onChange
    });
  }));
};

Tabs.propTypes = propTypes;
var _default = Tabs;
exports["default"] = _default;