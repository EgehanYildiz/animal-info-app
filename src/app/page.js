"use client"
import Header from '@/components/Header'
import React from 'react';
import MyCard from '@/components/MyCard';
        
export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="grid gap-7 pl-8 pt-7">
        <div className="col-5 mr-5">
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg" title="Cattle"/>
        </div>
        <div className="col-5">
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg" title="Cheetah"/> 
        </div>
        <div className="col-5 mr-5">
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/a/a7/RedcrestedTuraco.jpg" title="Bird"/>
        </div>
        <div className="col-5">
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/5/5b/Peromyscus_eremicus.jpg" title="Cactus Mouse"/> 
        </div>
      </main>
    </div>
  )
}

