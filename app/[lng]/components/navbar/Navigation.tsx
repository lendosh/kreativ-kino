import React from 'react';
import MenuItem from "@/app/[lng]/components/navbar/MenuItem";
import {useRouter} from "next/navigation";

const navigationItems = [
    {label: 'Portfolio', href: '/portfolio'},
    {label: 'Agency', href: '/agency'},
    {label: 'Services', href: '/services'},
    {label: 'Contact us', href: '/contacts'},
]
const Navigation = () => {
    const router = useRouter();
    return (
        <div className='text-white lg:flex lg:flex-row hidden'>
            {navigationItems.map(item => (
                <MenuItem key={item.label} onClick={() => router.push(item.href)} label={item.label} />
            ))}
        </div>
    );
};

export default Navigation;
