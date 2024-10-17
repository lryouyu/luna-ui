import React from "react";
import './Button.scss';
declare enum BUTTON_TYPE {
    PRIMARY = "primary",
    WARNING = "warning",
    DANGER = "danger",
    DEFAULT = "default"
}
interface ButtonProps {
    classNames?: string;
    width?: number;
    height?: number;
    type?: BUTTON_TYPE;
    color?: string;
    disabled?: boolean;
    label?: string;
    size?: number;
    icon?: JSX.Element;
    textColor?: string;
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    children?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
