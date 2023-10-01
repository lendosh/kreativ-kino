import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";

import {fallbackLng, languages} from "@/app/i18n/settings";
import {dir} from "i18next";
import Navbar from "@/app/[lng]/components/navbar/Navbar";
import ApplicationModal from "@/app/[lng]/components/modals/ApplicationModal";
import ContactBar from "@/app/[lng]/components/ContactBar";
import Footer from "@/app/[lng]/components/Footer";
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
                                           lng,
                                       }
                                   }: {
    children: React.ReactNode,
    params: {
        lng: string,
    },
}) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    const { t } = await useTranslation(lng);

    return (
        <html lang={lng} dir={dir(lng)}>
        <body className={inter.className}>
        <Navbar language={lng}/>
        <ApplicationModal language={lng}/>
        <Container>
            {children}
        </Container>
        <ContactBar language={lng}/>
        <Footer/>
        </body>
        </html>
    )
}
