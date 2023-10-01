import React from 'react';
import {useRouter} from "next/navigation";
import {Trans} from "react-i18next";
import {useTranslation} from "@/app/i18n/client";

interface WelcomeBoardProps {
    language: string;
}

const WelcomeBoard: React.FC<WelcomeBoardProps> = ({
                                                       language
                                                   }) => {
    const router = useRouter();
    const {t} = useTranslation(language, 'global');

    return (
        <div className='flex'>
            <p className='
                            mt-40
                            font-bold
                            drop-shadow-xl
                            lg:text-6xl
                            md:text-5xl
                            text-4xl
                            hyphens-manual
                            break-words
                        '>
                <Trans
                    i18nKey='pages.main.welcome_text'
                    t={t}
                    components={{
                        1: (
                            <a className='
                            underline
                            decoration-2
                            xs:decoration-3
                            sm:decoration-4
                            lg:decoration-8
                            decoration-sky-500
                            cursor-pointer
                            '
                            onClick={() => router.push(`/${language}/services`)}
                            />
                        ),
                        2: (
                            <a/>
                        ),
                        3: (
                            <a className='
                            underline
                            decoration-2
                            xs:decoration-3
                            sm:decoration-4
                            lg:decoration-8
                            decoration-yellow-500
                            cursor-pointer
                            '
                            onClick={() => router.push(`/${language}/agency`)}
                            />
                        )
                    }}
                />
            </p>
        </div>
    );
};

export default WelcomeBoard;
