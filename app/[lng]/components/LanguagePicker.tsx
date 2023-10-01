import React from 'react';
import {languages} from "@/app/i18n/settings";
import {usePathname, useRouter} from "next/navigation";

const languageSymb: Record<string, string> = {
    'de': 'DE',
    'fr': 'FR',
    'it': 'IT'
}
const LanguagePicker = ({
    language
                        } : {
    language: string
}) => {
    const router = useRouter();
    const pathname = usePathname();
    function changeLanguage(oldLanguage: string, newLanguage: string) {
        return pathname.replace(oldLanguage, newLanguage);
    }
    return (
        <div className='px-4 flex flex-row gap-2 items-center'>
            {languages.map(lng => (
                <div
                    key={lng}
                    onClick={() => {
                        router.push(changeLanguage(language, lng))
                    }}
                    className='
                                            cursor-pointer
                                            hover:scale-125
                                            ease-in-out
                                            duration-200
                                            transition
                                        '
                >
                    {languageSymb[lng]}
                </div>
            ))}
        </div>
    );
};

export default LanguagePicker;
