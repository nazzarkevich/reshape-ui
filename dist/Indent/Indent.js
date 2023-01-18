"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _style = _interopRequireWildcard(require("./style"));
var _compileStyles = _interopRequireDefault(require("../utils/compileStyles"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    indents.push( /*#__PURE__*/_react["default"].createElement(_style.IndentItem, {
      key: i,
      type: type,
      styles: styles.indent
    }));
  }
  return /*#__PURE__*/_react["default"].createElement(_style.IndentWrapper, {
    styles: styles.wrapper
  }, indents && indents.map(function (indent) {
    return indent;
  }));
};
IndentView.propTypes = propTypes;
var _default = IndentView;
exports["default"] = _default;