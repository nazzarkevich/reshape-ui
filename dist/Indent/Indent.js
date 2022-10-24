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
  type: _propTypes["default"].string,
  number: _propTypes["default"].number.isRequired
};

var IndentView = function IndentView(props) {
  var number = props.number,
      type = props.type;
  var styles = (0, _compileStyles["default"])(_style["default"], props);
  var indents = [];

  for (var i = 0; i < number; i++) {
    indents.push(_react["default"].createElement(_style.IndentItem, {
      key: i,
      type: type,
      styles: styles.indent
    }));
  }

  return _react["default"].createElement(_style.IndentWrapper, {
    styles: styles.wrapper
  }, indents && indents.map(function (indent) {
    return indent;
  }));
};

IndentView.propTypes = propTypes;
var _default = IndentView;
exports["default"] = _default;