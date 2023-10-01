'use client';

import React from 'react';
import Button from "@/app/[lng]/components/Button";
import useApplicationModal from "@/app/[lng]/hooks/useApplicationModal";
import {Disclosure} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {useRouter} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";
import LanguagePicker from "@/app/[lng]/components/LanguagePicker";
import NavigationItem from "@/app/[lng]/components/navbar/NavigationItem";

interface NavbarProps {
    language: string,
    path?: string
}

const Navbar = ({language, path = ''}: NavbarProps) => {
    const {t} = useTranslation(language, 'global');

    const navigation = [
        {name: t('navbar.portfolio'), href: `/${language}/portfolio`, current: false},
        {name: t('navbar.agency'), href: `/${language}/agency`, current: false},
        {name: t('navbar.services'), href: `/${language}/services`, current: false},
        {name: t('navbar.contact'), href: `/${language}/contacts`, current: false},
    ]

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
    }

    const toggleNavigationItem = (name: string) => {
        navigation.map(nav => nav.current = nav.name === name);
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
                             onClick={() => router.push(`/${language}`)}
                        >
                            KreativKino
                        </div>
                        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-2">
                            {navigation.map((item) => (
                                <NavigationItem
                                    key={item.name}
                                    item={item}
                                    classNames={classNames}
                                    onClick={() => toggleNavigationItem(item.name)}
                                />
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
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="items-center hidden md:flex w-max">
                            <LanguagePicker language={language}/>
                            <Button
                                short
                                label={t('navbar.button_text')}
                                onClick={applicationModal.onOpen}
                            />
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden bg-white h-screen flex flex-col">
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
                        <div className=''>
                            <hr className='pb-4'/>
                            <div className="flex justify-center items-center space-x-2">
                                <LanguagePicker language={language}/>
                            </div>
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
