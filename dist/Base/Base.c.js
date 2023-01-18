"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Base = /*#__PURE__*/function (_Component) {
  _inherits(Base, _Component);
  var _super = _createSuper(Base);
  function Base(_props) {
    var _this;
    _classCallCheck(this, Base);
    _this = _super.call(this, _props);
    _defineProperty(_assertThisInitialized(_this), "bindProps", function (name, onChange) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var value = null,
        onChangeCallback = null;
      if (name) {
        value = _this.getBoundValue(name);
        if (typeof onChange === 'function') {
          onChangeCallback = onChange;
        }
      }
      return _objectSpread({
        value: value,
        onChange: onChangeCallback
      }, props);
    });
    return _this;
  }
  _createClass(Base, [{
    key: "getBoundValue",
    value: function getBoundValue(name) {
      return this.state ? this.state[name] : null;
    }

    // Old bind Prop
    // bindProps = (name, props = {}) => {
    //     this.crefs = this.crefs || {};
    //
    //     let ref,
    //         // error = false,
    //         attribute = null,
    //         value = null,
    //         checked = null,
    //         onChange = null;
    //
    //     if (name) {
    //         ref = this.bindElementRef.bind(this);
    //
    //         attribute = name;
    //         // error = !!this._matchError({name});
    //         value = this.state ? this.state[name] : null;
    //         checked = typeof value === 'boolean' ? value : null;
    //         onChange = (event = {}) => {
    //             let value;
    //
    //             if (event.target) {
    //                 if (event.target.type === 'checkbox') {
    //                     value = event.target.checked;
    //                 } else {
    //                     value = event.target.value;
    //                 }
    //             } else {
    //                 value = event;
    //             }
    //
    //             return this.setState({[name]: value});
    //         };
    //     }
    //
    //     return {
    //         elementRef: ref,
    //         bind: false,
    //         // error,
    //         attribute,
    //         value,
    //         checked,
    //         onChange,
    //         // common props
    //         ...props,
    //     };
    // };
  }, {
    key: "bindElementRef",
    value: function bindElementRef(el) {
      this.crefs = this.crefs || {};
      if (el !== null) {
        if (el instanceof HTMLElement && el.name) {
          this.crefs[el.name] = el;
        } else if (el.props && el.props.attribute) {
          this.crefs[el.props.attribute] = el;
        }
      }
    }
  }]);
  return Base;
}(_react.Component);
_defineProperty(Base, "displayName", 'BaseComponent');
var _default = Base;
exports["default"] = _default;