'use client';

import React from 'react';

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return (
        <div
            onClick={onClick}
            className='
            px-4 
            py-3 
            hover:text-neutral-700
            transition
            font-semibold
            cursor-pointer
        '
        >
            {label}
        </div>
    )
}

export default MenuItem;