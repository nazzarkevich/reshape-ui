"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = _interopRequireDefault(require("../styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  id: _propTypes["default"].string,
  value: _propTypes["default"].string.isRequired,
  active: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  iconName: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string
};

var Tab = function Tab(props) {
  var handleClick = function handleClick(value) {
    return function (event) {
      var onClick = props.onClick,
          onChange = props.onChange;

      if (typeof onChange === 'function') {
        onChange(event, value);
      }

      if (typeof onClick === 'function') {
        onClick(event, value);
      }
    };
  };

  var id = props.id,
      value = props.value,
      active = props.active,
      iconName = props.iconName,
      className = props.className;
  return _react["default"].createElement(_Icon["default"], {
    id: id,
    size: "medium",
    name: iconName,
    disabled: !active,
    className: className,
    onClick: handleClick(value),
    hoverColor: _styles["default"].primaryForeground
  });
};

Tab.propTypes = propTypes;
var _default = Tab;
exports["default"] = _default;