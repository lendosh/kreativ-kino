'use client';

import React from 'react';
import Logo from "@/app/components/navbar/Logo";
import Container from "@/app/components/Container";
import Navigation from "@/app/components/navbar/Navigation";
import Button from "@/app/components/Button";
import useApplicationModal from "@/app/hooks/useApplicationModal";
import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {PlusIcon} from '@heroicons/react/20/solid'
import {useRouter} from "next/navigation";

const Navbar = () => {
    const navigation = [
        {name: 'Portfolio', href: '/portfolio', current: false},
        {name: 'Agency', href: '/agency', current: false},
        {name: 'Services', href: '/services', current: false},
        {name: 'Contact us', href: '/contacts', current: false},
    ]

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
    }

    const router = useRouter();
    const applicationModal = useApplicationModal();
    return (
        <Disclosure as="nav" className={`fixed w-screen z-40`}>
            {({open}) => (
                <>
                    <div
                        className={`${open ? 'bg-opacity-100' : 'bg-opacity-0'} 
                        bg-white flex h-16 justify-between pl-8 pr-8
                        `}
                    >
                        <div className="flex flex-shrink-0 items-center text-xl cursor-pointer"
                             onClick={() => router.push('/')}
                        >
                            KreativKino
                        </div>
                        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ?
                                            'bg-gray-900 text-black'
                                            :
                                            'text-black hover:bg-gray-700 hover:text-neutral-100',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className='-mr-2 ml-auto items-center flex md:hidden'>
                            <Disclosure.Button
                                className='
                                    relative
                                    inline-flex
                                    items-center
                                    justify-center
                                    p-2
                                    text-black
                                    rounded-xl
                                    '>
                                {/*<span className="absolute -inset-0.5" />*/}
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="items-center hidden md:flex">
                            <Button
                                short
                                label='Leave request'
                                onClick={applicationModal.onOpen}
                            />
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden h-screen bg-white">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 flex flex-col items-center">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ?
                                            'bg-gray-900 text-black'
                                            :
                                            'text-black hover:bg-gray-700 hover:text-neutral-100',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className="border-t-[1px] border-gray-700 pb-3 pt-3">
                            <div className="mt-3 space-y-1 px-2 sm:px-3 flex flex-col items-center">
                                <Button
                                    label='Leave request'
                                    onClick={applicationModal.onOpen}
                                />
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
