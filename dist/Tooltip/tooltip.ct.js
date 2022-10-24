"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOOLTIP_SCROLL_CONTAINER = exports.VIEWPORT_SPACE = exports.DEFAULT_TITLE = exports.ENTER_DELAY = exports.PLACEMENT = exports.INDENT = void 0;

var _styles = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PLACEMENT = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
};
exports.PLACEMENT = PLACEMENT;
var ENTER_DELAY = 0;
exports.ENTER_DELAY = ENTER_DELAY;
var INDENT = _styles["default"].gutter;
exports.INDENT = INDENT;
var VIEWPORT_SPACE = _styles["default"].gutter;
exports.VIEWPORT_SPACE = VIEWPORT_SPACE;
var DEFAULT_TITLE = 'your title';
exports.DEFAULT_TITLE = DEFAULT_TITLE;
var TOOLTIP_SCROLL_CONTAINER = 'tooltip_scroll_container';
exports.TOOLTIP_SCROLL_CONTAINER = TOOLTIP_SCROLL_CONTAINER;