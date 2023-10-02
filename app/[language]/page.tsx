'use client';

import React from 'react';
import WelcomeBoard from "@/app/[language]/components/WelcomeBoard";
import AboutCompanyBoard from "@/app/[language]/components/AboutCompanyBoard";
import {fallbackLng, languages} from "@/app/i18n/settings";

export async function generateStaticParams() {
    return languages.map((lng) => ({lng}))
}

const Page = ({
    params: {
        language
    }
}: {
    params: {
        language: string
    }
}) => {
    if (languages.indexOf(language) < 0) language = fallbackLng;

    return (
        <div className='flex flex-col gap-24 overflow-hidden'>
            <WelcomeBoard language={language}/>
            <AboutCompanyBoard language={language}/>
        </div>
    )
};

export default Page;