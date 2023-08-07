/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react'; 
import { Card } from 'primereact/card';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MyCard({ source, title }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const headerHeight = isSmallScreen ? '13rem' : '20rem';

    const header = (
        <div 
            style={{
                position: 'relative',
                width: '100%',
                height: headerHeight,
                overflow: 'hidden'
            }}
        >
            <img 
                alt="Animal" 
                src={source} 
                style={{
                    position: 'absolute',
                    top: -10,
                    left: 0,
                    width: '100%',
                    height: 'auto', 
                    objectFit: 'cover'
                }}
                onLoad={() => setImageLoaded(true)}
            />
        </div>
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
                    If you want more info, please click the link below.
                </p>
            </Card>
        </div>
    );
    
    
}
