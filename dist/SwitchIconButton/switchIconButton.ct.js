"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ICON_STATUS = exports.ICON_STATE = void 0;
var _colors = _interopRequireDefault(require("../styles/colors"));
var _ICON_STATE;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ICON_STATUS = {
  INITIAL: 'initial',
  ACTIVE: 'active',
  APPLIED: 'applied',
  ERROR: 'error'
};

// TODO remove after refactoring
// const ICON_STATE = {
//     [ICON_STATUS.INITIAL]: null,
//     [ICON_STATUS.ACTIVE]:  { active: true },
//     [ICON_STATUS.ERROR]:   { error: true }
// };
exports.ICON_STATUS = ICON_STATUS;
var ICON_STATE = (_ICON_STATE = {}, _defineProperty(_ICON_STATE, ICON_STATUS.ACTIVE, _colors["default"].primary), _defineProperty(_ICON_STATE, ICON_STATUS.ERROR, _colors["default"].warning), _ICON_STATE);
exports.ICON_STATE = ICON_STATE;