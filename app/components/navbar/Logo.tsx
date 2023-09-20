import React from 'react';
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        // <Image
        //     src='/photo.jpg'
        //     width='30'
        //     height='30'
        //     alt='Logo'
        // />
        <div
            className='text-2xl font-semibold cursor-pointer'
            onClick={() => router.push('/test')}
        >
            KreativKino
        </div>
    );
};

export default Logo;
