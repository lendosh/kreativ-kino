'use client';

import React from 'react';
import WelcomeBoard from "@/app/[lng]/components/WelcomeBoard";
import AboutCompanyBoard from "@/app/[lng]/components/AboutCompanyBoard";
import {fallbackLng, languages} from "@/app/i18n/settings";

export async function generateStaticParams() {
    return languages.map((lng) => ({lng}))
}

const Page = ({
    params: {
        lng
    }
}: {
    params: {
        lng: string
    }
}) => {
    if (languages.indexOf(lng) < 0) lng = fallbackLng;

    return (
        <div className='flex flex-col gap-24 overflow-hidden'>
            <WelcomeBoard language={lng}/>
            <AboutCompanyBoard language={lng}/>
        </div>
    )
};

export default Page;