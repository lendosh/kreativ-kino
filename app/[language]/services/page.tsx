'use client';

import React from 'react';
import {fallbackLng, languages} from "@/app/i18n/settings";
import {useTranslation} from "@/app/i18n/client";

export async function generateStaticParams() {
    return languages.map((lng) => ({lng}))
}

const ServicesPage = ({
    params: {
        language
    }
}: {
    params: {
        language: string
    }
}) => {
    if (languages.indexOf(language) < 0) language = fallbackLng;

    const {t} = useTranslation(language, 'global');

    return (
        <div className='flex flex-col gap-20'>
            <div>
                <p className='pt-32 font-bold text-justify'>
                    {t('services.description')}
                </p>
            </div>
            <div className='flex grid-cols-[20%_1fr] gap-4 md:gap-20 lg:gap-16'>
                <p className='[writing-mode:vertical-rl] rotate-180 text-black text-7xl md:text-8xl lg:text-9xl font-extrabold'>
                    Kreativ
                </p>
                <div className='grid w-full grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div>
                        <p className='underline'>
                            Naming
                        </p>
                        <p className='text-neutral-700 pt-2'>
                            Something about naming
                        </p>
                    </div>
                    <div>
                        <p className='underline'>
                            Brandbook
                        </p>
                        <p className='text-neutral-700 pt-2'>
                            Something about creating brandbook
                        </p>
                    </div>
                    <div>
                        <p className='underline'>
                            Logo
                        </p>
                        <p className='text-neutral-700 pt-2'>
                            Something about design logo
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex grid-cols-[20%_1fr] gap-4 md:gap-20 lg:gap-16'>
                <div className='grid w-full grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div>
                        <p className='underline'>
                            Promo
                        </p>
                        <p className='text-neutral-700 pt-2'>
                            Something about how we made a Promo
                        </p>
                    </div>
                    <div>
                        <p className='underline'>
                            SEO
                        </p>
                        <p className='text-neutral-700 pt-2'>
                            Something about SEO
                        </p>
                    </div>
                    <div>
                        <p className='underline'>
                            Other films
                        </p>
                        <p className='text-neutral-700 pt-2'>
                            More about films
                        </p>
                    </div>
                </div>
                <p className='[writing-mode:vertical-rl] text-black text-7xl md:text-8xl lg:text-9xl font-extrabold'>
                    Kino
                </p>
            </div>
        </div>
    );
};

export default ServicesPage;
