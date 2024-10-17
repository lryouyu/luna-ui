import React from "react";
import './Button.scss'
import { Icon } from "luna-ui/Icon";

enum BUTTON_TYPE {
  PRIMARY = 'primary',
  WARNING = 'warning',
  DANGER = 'danger',
  DEFAULT = 'default'
}

interface ButtonProps {
  classNames?: string; // 自定义按钮类名
  width?: number; // 按钮宽度
  height?: number; // 按钮高度
  type?: BUTTON_TYPE; //按钮类别
  color?: string; // 按钮颜色
  disabled?: boolean; // 按钮禁用状态
  label?: string; // 按钮文本
  size?: number; //字体大小
  icon?: JSX.Element; // 按钮图标
  textColor?: string; // 文本颜色
  iconPosition?: 'left' | 'right'; // 图标位置
  onClick?: () => void; //点击事件
  children?: React.ReactNode; // 子元素
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    classNames = '',
    width,
    height,
    type,
    color,
    disabled = false,
    label,
    icon,
    iconPosition = 'left',
    size = 18,
    textColor = '#fff',
    onClick,
    children
  } = props;

  const style = {
    width: width + 'px',
    height: height + 'px'
  }

  const getButtonStyle = () => {
    switch (type) {
      case BUTTON_TYPE.PRIMARY:
        return {
          ...style,
          backgroundColor: '#1890ff',
          color: '#fff'
        };  // 蓝色
      case BUTTON_TYPE.WARNING:
        return {
          ...style,
          backgroundColor: '#faad14',
          color: '#fff'
        };  // 黄色
      case BUTTON_TYPE.DANGER:
        return {
          ...style,
          backgroundColor: '#ff4d4f',
          color: '#fff'
        };  // 红色
      case BUTTON_TYPE.DEFAULT:
        return {
          ...style,
          backgroundColor: '#d9d9d9',
          color: '#000'
        };  // 默认灰色
    }
  }


  return <button
    className={`button ${type} ${classNames}`}  // 按钮类名，支持自定义
    style={type ? getButtonStyle() : { ...style, backgroundColor: color, color: textColor }}
    disabled={disabled}
    onClick={onClick}

  >
    {/* 图标与文字的布局逻辑 同等 height */}
    <div>
      {(icon && iconPosition === 'left') && <Icon icon={icon} color={textColor || getButtonStyle()?.color} size={size} />}
      <span style={{ fontSize: size, margin: icon ? '0 8px' : '0', color: textColor || getButtonStyle()?.color }}>
        {label || children}
      </span>
      {(icon && iconPosition === 'right') && <Icon icon={icon} color={textColor || getButtonStyle()?.color} size={size} />}
    </div>


  </button >
}

export default Button
