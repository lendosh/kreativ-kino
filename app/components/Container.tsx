'use client';

import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
  return (
    <div
        className='
            max-w-[2520px]
            mx-auto
            xl:px-8
            md:px-8
            sm:px-6
            px-1
        '
    >
        {children}
    </div>
  )
}

export default Container;