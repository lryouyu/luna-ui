import React from 'react';
var Icon = function Icon(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 12 : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color,
    onClick = _ref.onClick,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    icon = _ref.icon;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    className: "icon-container ".concat(className),
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: color
    }
  }, icon);
};
export default Icon;