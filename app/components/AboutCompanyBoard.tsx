import React from 'react';
import Image from "next/image";

const AboutCompanyBoard = () => {
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
                    Wer wir sind?
                </div>
                <div className='lg:pt-10 md:pt-8 pt-7'>
                    Unsere kreativen Köpfe und modernste Technologie verschmelzen, um einzigartige
                    Werbekampagnen zu entwickeln, die Ihre Zielgruppe ansprechen. Von der Ideenfindung über die
                    Dreharbeiten bis zur Postproduktion bieten wir einen umfassenden Service, um
                    sicherzustellen, dass Ihre Botschaft perfekt umgesetzt wird. Lassen Sie uns gemeinsam Ihre
                    Marke in den Mittelpunkt stellen und in den Köpfen Ihrer Kunden verankern.
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
