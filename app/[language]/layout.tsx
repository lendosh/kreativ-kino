import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";

import {fallbackLng, languages} from "@/app/i18n/settings";
import {dir} from "i18next";
import Navbar from "@/app/[language]/components/navbar/Navbar";
import ApplicationModal from "@/app/[language]/components/modals/ApplicationModal";
import ContactBar from "@/app/[language]/components/ContactBar";
import Footer from "@/app/[language]/components/Footer";
import Container from './components/Container';
import {useTranslation} from "@/app/i18n";

const inter = Inter({subsets: ['latin']});

export async function generateStaticParams() {
    return languages.map((lng) => ({lng}))
}

export const metadata: Metadata = {
    title: 'Kreativ Kino',
    description: 'Kreativ Kino Werbeagentur',
}

export default async function RootLayout({
                                       children,
                                       params: {
                                           language,
                                       }
                                   }: {
    children: React.ReactNode,
    params: {
        language: string,
    },
}) {
    if (languages.indexOf(language) < 0) language = fallbackLng;
    const { t } = await useTranslation(language);

    return (
        <html lang={language} dir={dir(language)}>
        <body className={inter.className}>
        <Navbar language={language}/>
        <ApplicationModal language={language}/>
        <Container>
            {children}
        </Container>
        <ContactBar language={language}/>
        <Footer/>
        </body>
        </html>
    )
}
