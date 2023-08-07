"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import MyCard from '@/components/MyCard';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // This function will be called whenever the window is resized.
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Return a cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Empty dependency array ensures this effect runs once when component mounts and cleans up when it unmounts.

  const isSmallScreen = windowWidth <= 600;

  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="grid m-0 justify-content-evenly align-items-center gap-6 p-5 pt-7">
        <div className={isSmallScreen ? "col-12" : "col-5"}>
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg" title="Cattle"/>
        </div>
        <div className={isSmallScreen ? "col-12" : "col-5"}>
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg" title="Cheetah"/> 
        </div>
        <div className={isSmallScreen ? "col-12" : "col-5"}>
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/a/a7/RedcrestedTuraco.jpg" title="Bird"/>
        </div>
        <div className={isSmallScreen ? "col-12" : "col-5"}>
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/5/5b/Peromyscus_eremicus.jpg" title="Cactus Mouse"/> 
        </div>
      </div>
    </div>
  )
}
