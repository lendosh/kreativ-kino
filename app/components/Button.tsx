import {IconType} from "react-icons";
import React from "react";

interface ButtonProps {
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    short?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    short,
    icon: Icon
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-full
                hover:opacity-80
                hover:bg-neutral-900
                transition
                h-10
                ${short ? 'w-40' : 'w-full' }
                ${outline ? "bg-white" : "bg-blue-500"}
                ${outline ? "border-black" : "border-blue-500"}
                ${outline ? "text-black" : "text-white"}
                ${small ? "py-1" : ""}
                ${small ? "text-sm" : "text-md"}
                ${small ? "font-light" : "font-semibold"}
                ${small ? "border-[1px]" : "border-2"}          
            `}
        >
            {label}
        </button>
    );
}

export default Button;