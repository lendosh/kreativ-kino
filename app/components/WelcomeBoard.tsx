import React from 'react';
import {useRouter} from "next/navigation";

const   WelcomeBoard = () => {
    const router = useRouter();

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
                    '
            >
                {`Wir sind spezialisiert auf die Förderung von Marken und die `}
                <a
                    className='
                        underline
                        decoration-2
                        xs:decoration-3
                        sm:decoration-4
                        lg:decoration-8
                        decoration-sky-500
                        cursor-pointer
                        '
                    onClick={() => router.push('/services')}
                >
                    {`Videoproduktion`}
                </a>
                {`. `}
                <a
                    className='
                        underline
                        decoration-2
                        xs:decoration-3
                        sm:decoration-4
                        lg:decoration-8
                        decoration-yellow-500
                        cursor-pointer
                        '
                    onClick={() => router.push('/agency')}
                >
                    {`Unser Team`}
                </a>
                {` erstellt fesselnde Videos und führt effektive Marketingkampagnen durch, um Ihrem Unternehmen 
                    zu helfen, neue Höhen im Bereich digitaler Werbung zu erreichen.`}
            </p>
        </div>
    );
};

export default WelcomeBoard;
