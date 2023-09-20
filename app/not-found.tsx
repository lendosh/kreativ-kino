import React from 'react';
import {GiAutoRepair} from "react-icons/gi";

export default function Custom404() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center p-24 gap-12">
            <GiAutoRepair size={80}/>
            Website in Entwicklung
        </div>
    );
};

