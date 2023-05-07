import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logo.png'
import DarkToggleButton from './Utils/DarkToggleButton'

export default function Header() {
  return (
    <nav className="w-11/12 mx-auto flex justify-between py-3 px-4 bg-transparent rounded-2xl md:w-4/5">
      <div className="flex cursor-pointer">
        <Image
          className="w-8 h-8 flex-1 mr-1 content-center"
          src={logo}
          alt="funny face logo"
        />
        <h1 className="font-black font-bold text-xl dark:text-yellow">
          <Link href="/">memegen</Link>
        </h1>
      </div>
      <DarkToggleButton />
    </nav>
  )
}
