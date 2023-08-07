"use client"
import Header from '@/components/Header'
import React from 'react';
import MyCard from '@/components/MyCard';
        
export default function Home() {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-2 gap-5 p-7 w-full justify-content-between align-items-center">
        <MyCard source="https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg" title="Cattle"/>
        <MyCard source="https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg" title="Cattle"/>
        <MyCard source="https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg" title="Cattle"/>
        <MyCard source="https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg" title="Cattle"/>
      </main>
    </div>
  )
}
