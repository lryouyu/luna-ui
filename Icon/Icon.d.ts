import React from 'react';
interface IconProps {
    size?: number;
    color?: string;
    onClick?: () => void;
    className?: string;
    icon: JSX.Element;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
