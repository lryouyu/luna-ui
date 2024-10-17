function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from "react";
import "./Button.scss";
import { Icon } from "../Icon";
var BUTTON_TYPE = /*#__PURE__*/function (BUTTON_TYPE) {
  BUTTON_TYPE["PRIMARY"] = "primary";
  BUTTON_TYPE["WARNING"] = "warning";
  BUTTON_TYPE["DANGER"] = "danger";
  BUTTON_TYPE["DEFAULT"] = "default";
  return BUTTON_TYPE;
}(BUTTON_TYPE || {});
var Button = function Button(props) {
  var _getButtonStyle, _getButtonStyle2, _getButtonStyle3;
  var _props$classNames = props.classNames,
    classNames = _props$classNames === void 0 ? '' : _props$classNames,
    width = props.width,
    height = props.height,
    type = props.type,
    color = props.color,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    label = props.label,
    icon = props.icon,
    _props$iconPosition = props.iconPosition,
    iconPosition = _props$iconPosition === void 0 ? 'left' : _props$iconPosition,
    _props$size = props.size,
    size = _props$size === void 0 ? 18 : _props$size,
    _props$textColor = props.textColor,
    textColor = _props$textColor === void 0 ? '#fff' : _props$textColor,
    onClick = props.onClick,
    children = props.children;
  var style = {
    width: width + 'px',
    height: height + 'px'
  };
  var getButtonStyle = function getButtonStyle() {
    switch (type) {
      case BUTTON_TYPE.PRIMARY:
        return _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: '#1890ff',
          color: '#fff'
        });
      // 蓝色
      case BUTTON_TYPE.WARNING:
        return _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: '#faad14',
          color: '#fff'
        });
      // 黄色
      case BUTTON_TYPE.DANGER:
        return _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: '#ff4d4f',
          color: '#fff'
        });
      // 红色
      case BUTTON_TYPE.DEFAULT:
        return _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: '#d9d9d9',
          color: '#000'
        });
      // 默认灰色
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    className: "button ".concat(type, " ").concat(classNames) // 按钮类名，支持自定义
    ,
    style: type ? getButtonStyle() : _objectSpread(_objectSpread({}, style), {}, {
      backgroundColor: color,
      color: textColor
    }),
    disabled: disabled,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", null, icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    color: textColor || ((_getButtonStyle = getButtonStyle()) === null || _getButtonStyle === void 0 ? void 0 : _getButtonStyle.color),
    size: size
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size,
      margin: icon ? '0 8px' : '0',
      color: textColor || ((_getButtonStyle2 = getButtonStyle()) === null || _getButtonStyle2 === void 0 ? void 0 : _getButtonStyle2.color)
    }
  }, label || children), icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    color: textColor || ((_getButtonStyle3 = getButtonStyle()) === null || _getButtonStyle3 === void 0 ? void 0 : _getButtonStyle3.color),
    size: size
  })));
};
export default Button;