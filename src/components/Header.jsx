import React from 'react'
import "@/styles/additionalClasses.css"

const Header = () => {
  return (
    <header className="border-900 border-round-lg border-solid top-0 animate-bg p-5">
        <div className="flex justify-content-center align-items-center h-32">
            <h1 className="text-4xl text-white border-0 border-black shadow-lg p-2">
                Welcome to Animal Info App
            </h1>
        </div>
    </header>
  )
}

export default Header
