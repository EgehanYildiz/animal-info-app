"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import MyCard from '@/components/MyCard';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

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
