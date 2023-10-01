'use client';

import React from 'react';
import WelcomeBoard from "@/app/[lng]/components/WelcomeBoard";
import AboutCompanyBoard from "@/app/[lng]/components/AboutCompanyBoard";

const Test = () => {

    return (
        <div className='flex flex-col gap-24 overflow-hidden'>
            <WelcomeBoard />
            <AboutCompanyBoard />
        </div>
    )
};

export default Test;