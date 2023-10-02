import React from 'react';
import Image from "next/image";
import {useTranslation} from "@/app/i18n/client";

interface AboutCompanyBoardProps {
    language: string
}

const AboutCompanyBoard: React.FC<AboutCompanyBoardProps> = ({
                                                                 language
                                                             }) => {
    const { t } = useTranslation(language, 'global');
    return (
        <div className='
                    flex
                    lg:flex-row
                    flex-col
                    justify-center
                    items-center
                    gap-4
                    '>
            <div className='basis-1/2 lg:text-3xl md:text-2xl text-xl  w-full'>
                <div className='lg:text-6xl font-semibold mb-auto'>
                    {t('pages.main.about_company.title')}
                </div>
                <div className='lg:pt-10 md:pt-8 pt-7'>
                    {t('pages.main.about_company.text')}
                </div>
            </div>
            <div className='basis-1/2 rounded relative w-full h-full overflow-hidden'>
                <Image
                    src='/photo.jpg'
                    alt='Photo'
                    height={2000}
                    width={2000}
                />
            </div>
        </div>
    );
};

export default AboutCompanyBoard;
