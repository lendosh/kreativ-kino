import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import ApplicationModal from "@/app/components/modals/ApplicationModal";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer";
import React from "react";
import Container from "@/app/components/Container";
import ContactBar from "@/app/components/ContactBar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Kreativ Kino',
    description: 'Kreativ Kino Werbeagentur',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        <ApplicationModal/>
        <Container>
            {children}
        </Container>
        <ContactBar />
        <Footer/>
        </body>
        </html>
    )
}
