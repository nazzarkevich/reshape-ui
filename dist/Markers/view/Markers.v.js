"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("../style");

var _classnames = _interopRequireDefault(require("classnames"));

var _markers = require("../markers.ct");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  componentStyles: _propTypes["default"].shape({}),
  hideCrossAxis: _propTypes["default"].bool,
  markerList: _propTypes["default"].arrayOf(_propTypes["default"].string),
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  id: _propTypes["default"].string
};

var MarkersView = function MarkersView(props) {
  var id = props.id,
      onClick = props.onClick,
      className = props.className,
      markerList = props.markerList,
      hideCrossAxis = props.hideCrossAxis,
      componentStyles = props.componentStyles;
  return _react["default"].createElement(_style.Wrapper, {
    id: id,
    onClick: onClick,
    className: className,
    styles: componentStyles
  }, _react["default"].createElement(_style.Axis, {
    className: "main-axis",
    styles: componentStyles.mainAxis
  }, _markers.mainAxisIcons.map(function (marker) {
    return _react["default"].createElement(_style.Marker, {
      key: marker,
      className: (0, _classnames["default"])({
        active: markerList.includes(marker)
      }),
      "data-id": marker,
      styles: componentStyles.marker
    });
  })), !hideCrossAxis ? _react["default"].createElement(_style.Axis, {
    className: "cross-axis",
    styles: componentStyles.crossAxis
  }, _markers.crossAxisIcons.map(function (marker) {
    return _react["default"].createElement(_style.Marker, {
      key: marker,
      className: (0, _classnames["default"])({
        active: markerList.includes(marker)
      }),
      "data-id": marker,
      styles: componentStyles.marker
    });
  })) : null);
};

MarkersView.propTypes = propTypes;
var _default = MarkersView;
exports["default"] = _default;