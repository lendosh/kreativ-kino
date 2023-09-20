import React from 'react';

const Contacts = () => {
    return (
        <div className='flex justify-center items-center pt-20'>
            <div className='h-[600px] rounded-xl shadow-2xl w-[80%] flex flex-col items-center'>
                <div className='font-bold text-xl px-2 md:text-3xl lg:text-4xl pt-12'>
                    Lassen Sie uns Ihr Projekt gemeinsam besprechen!
                </div>
                <div className='flex flex-col pt-12'>
                    <div className=''>
                        Our socialmedia:
                    </div>
                    <div>
                        Some socialmedia
                    </div>
                </div>
                <div className='flex flex-col pt-12'>
                    <div className=''>
                        Personal contact?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
