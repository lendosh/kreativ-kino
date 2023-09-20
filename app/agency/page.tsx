import React from 'react';

const people = [
    {
        name: 'Leonard Krasner',
        role: 'CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Some bio info',
    },
    {
        name: 'Leonard Krasner',
        role: 'CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Some bio info',
    },
    {
        name: 'Leonard Krasner',
        role: 'CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Some bio info',
    },
    {
        name: 'Leonard Krasner',
        role: 'CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Some bio info',
    }
]
const Agency = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to
                        delivering the
                        best results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {people.map((person, index) => (
                        <li key={index} className="flex relative flex-col gap-6 xl:flex-row h-full w-full">
                            <img className="sm:aspect-[4/5] sm:w-52 flex-none rounded-2xl object-cover"
                                 src={person.imageUrl} alt=""/>
                            <div
                                className="absolute h-full w-full sm:static flex-auto bg-neutral-600 bg-opacity-20 sm:bg-opacity-0">
                                <div className='pt-20 text-blue-50/95'>
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight sm:text-gray-900">{person.name}</h3>
                                    <p className="text-base leading-7 sm:text-gray-600">{person.role}</p>
                                    <p className="mt-6 text-base leading-7 sm:text-gray-600">{person.bio}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Agency;
