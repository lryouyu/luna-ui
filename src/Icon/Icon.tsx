import React from 'react';

interface IconProps {
  size?: number; // 图标尺寸（宽高一致）
  color?: string; // 图标颜色
  onClick?: () => void; // 点击事件
  className?: string; // 自定义类名
  icon: JSX.Element; // 传入的 SVG 图标
}

const Icon: React.FC<IconProps> = ({ size = 12, color = '#000000', onClick, className = '', icon }) => {
  return (
    <span
      onClick={onClick}
      className={`icon-container ${className}`}
      style={{ display: 'inline-flex', width: size, height: size, color: color }}
    >
      {icon}
    </span>
  );
};

export default Icon;
