import React from 'react';

interface NavigationItemProps {
    item: { name: string, href: string, current: boolean },
    classNames: (...classes: any[]) => string;
    onClick: (name: string) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
    item,
    classNames,
    onClick
}) => {
    return (
        <a
            href={item.href}
            className={classNames(
                item.current
                    ?
                    'bg-gray-900 text-black'
                    :
                    'text-black hover:bg-gray-700 hover:text-neutral-100',
                'rounded-md px-3 py-2 text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
            onClick={() => onClick(item.name)}
        >
            {item.name}
        </a>
    );
};

export default NavigationItem;
