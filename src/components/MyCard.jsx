/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react'; 
import { Card } from 'primereact/card';
import Link from 'next/link';

export default function MyCard({ source, title }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const header = (
        <img 
            alt="Animal" 
            src={source} 
            className="w-full max-w-lg mx-auto" 
            onLoad={() => setImageLoaded(true)}
        />
    );

    const footer = (
        <div className="flex flex-wrap justify-content-end">
            <Link className="text-white" href={`/${title}`}> More Info </Link>
        </div>
    );

    return (
        <div className={`flex justify-content-center w-full ${imageLoaded ? '' : 'opacity-50'}`}>
            <Card title={title} footer={footer} header={header} className='w-full'>
                <p className="m-0">
                    This card is designed to inform you about the animal "{title}".
                    If you want more information, don't forget to click the link below.
                </p>
            </Card>
        </div>
    );
    
}
