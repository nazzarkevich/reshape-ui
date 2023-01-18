"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Base2 = _interopRequireDefault(require("../Base"));
var _index = require("../index");
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var Form = /*#__PURE__*/function (_Base) {
  _inherits(Form, _Base);
  var _super = _createSuper(Form);
  function Form() {
    var _this;
    _classCallCheck(this, Form);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "setErrorStatus", function () {
      var errors = _this.state.errors;
      var iconStatus = _this.props.iconStatus;
      var result = _objectSpread({}, iconStatus);
      for (var key in errors) {
        if (errors.hasOwnProperty(key) && errors[key] && iconStatus.hasOwnProperty(key)) {
          result = _objectSpread(_objectSpread(_objectSpread({}, iconStatus), result), {}, _defineProperty({}, key, _index.ICON_STATUS.ERROR));
        }
      }
      return result;
    });
    _defineProperty(_assertThisInitialized(_this), "checkErrors", function (errors) {
      return Object.keys(errors).some(function (i) {
        return errors[i] === true;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "checkValidationState", function (errors) {
      var hasInvalidFields = _this.checkErrors(errors);
      var isEmpty = _this.fieldList.every(function (i) {
        return _this.state[i] === null;
      });
      return isEmpty && hasInvalidFields;
    });
    _defineProperty(_assertThisInitialized(_this), "setupValidation", function (rules) {
      _this.validationRules = rules;
      _this.fieldList = Object.keys(rules);
      var errors = _this.getInitialValidationState();
      _this.state = _objectSpread(_objectSpread({}, _this.state), {}, {
        errors: errors
      });
    });
    _defineProperty(_assertThisInitialized(_this), "getInitialValidationState", function () {
      var fields = Object.keys(_this.validationRules);
      return fields.reduce(function (result, field) {
        result[field] = false;
        return result;
      }, {});
    });
    _defineProperty(_assertThisInitialized(_this), "resetValidationState", function () {
      _this.setState({
        errors: _this.getInitialValidationState()
      });
    });
    _defineProperty(_assertThisInitialized(_this), "validate", function (field, value) {
      var isEmptyValue = value === '';
      var rule = _this.validationRules[field];
      var result = {
        strict: false,
        loose: false
      };
      if (!isEmptyValue) {
        rule.forEach(function (i) {
          if (typeof i === 'function') {
            var matchResult = i(value);
            if (typeof matchResult === 'boolean') {
              if (matchResult === true) {
                result.strict = true;
                result.loose = true;
              } else {
                result.strict = false;
                result.loose = false;
              }
            }
            if (matchResult.strict) result.strict = true;
            if (matchResult.loose) result.loose = true;
          } else {
            if (i === value) result.strict = true;
            if (i.startsWith(value)) result.loose = true;
          }
        });
      }
      var isInvalidValue = !isEmptyValue && !result.loose;
      _this.setState(function (prevState) {
        return {
          errors: _objectSpread(_objectSpread({}, prevState.errors), {}, _defineProperty({}, field, isInvalidValue))
        };
      });
      return isEmptyValue || result.strict;
    });
    return _this;
  }
  _createClass(Form, [{
    key: "componentDidUpdate",
    value:
    // componentDidUpdate () {
    //     const { errors, iconStatus } = this.state;
    //
    //     if (errors) {
    //         const isValidationResetRequired = this.checkValidationState(errors);
    //         const isErrorsExist = this.checkErrors(errors);
    //
    //         if (isValidationResetRequired) {
    //             this.resetValidationState();
    //         }
    //
    //         if (isErrorsExist && iconStatus !== ICON_STATUS.ERROR) {
    //             this.setState({
    //                 iconStatus: ICON_STATUS.ERROR
    //             });
    //         }
    //
    //         if (!isErrorsExist && iconStatus === ICON_STATUS.ERROR) {
    //             this.setState({ iconStatus: this.props.iconStatus });
    //         }
    //     }
    // }

    function componentDidUpdate() {
      var _this$state = this.state,
        errors = _this$state.errors,
        errorStatus = _this$state.errorStatus;
      var iconStatus = this.props.iconStatus;
      if (errors) {
        var isValidationResetRequired = this.checkValidationState(errors);
        var isErrorsExist = this.checkErrors(errors);
        if (isValidationResetRequired) {
          this.resetValidationState();
        }
        if (isErrorsExist && errorStatus !== _index.ICON_STATUS.ERROR) {
          this.setState({
            errorStatus: _index.ICON_STATUS.ERROR
          });
          if ((0, _utils.isComposedIconStatus)(iconStatus)) {
            this.setState({
              iconStatus: this.setErrorStatus()
            });
          } else {
            this.setState({
              iconStatus: _index.ICON_STATUS.ERROR
            });
          }
        }
        if (!isErrorsExist && errorStatus === _index.ICON_STATUS.ERROR) {
          this.setState({
            iconStatus: iconStatus,
            errorStatus: null
          });
        }
      }
    }

    // bindFields = (name, fields) => {
    //     if (Array.isArray(fields) && fields.length) {
    //         this[name] = fields;
    //     }
    // }

    // updateBoundFields () {
    //     const stateFields = Object.keys(this.state);
    //     const observableFields = stateFields.filter(name => this[name]);
    //
    //     observableFields.forEach(name => {
    //         const boundFields = this[name];
    //
    //         const result = boundFields.reduce((accumulator, name) => {
    //             const value = this.state[name];
    //
    //             if (value) accumulator.push(value);
    //
    //             return accumulator;
    //         }, []);
    //
    //         const isActive = !!result.length;
    //
    //         if (isActive && !this.state[name]) {
    //             this.setState({ [name]: true });
    //         } else if (!isActive && this.state[name]) {
    //             this.setState({ [name]: false });
    //         }
    //     });
    // }
  }]);
  return Form;
}(_Base2["default"]);
_defineProperty(Form, "displayName", 'BaseForm');
var _default = Form;
exports["default"] = _default;