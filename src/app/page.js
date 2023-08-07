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
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg" title="Cattle"/> 
        </div>
        <div className="col-5 mr-5">
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg" title="Cattle"/>
        </div>
        <div className="col-5">
          <MyCard source="https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg" title="Cattle"/> 
        </div>
      </main>
    </div>
  )
}

