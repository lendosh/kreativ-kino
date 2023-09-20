'use client';

import React from 'react';
import WelcomeBoard from "@/app/components/WelcomeBoard";
import AboutCompanyBoard from "@/app/components/AboutCompanyBoard";

const Test = () => {

    return (
        <div className='flex flex-col gap-24 overflow-hidden'>
            <WelcomeBoard />
            <AboutCompanyBoard />
        </div>
    )
};

export default Test;