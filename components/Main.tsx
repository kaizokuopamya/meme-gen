import React from 'react'
import Link from 'next/link'

export default function Main() {
  return (
    <div className="w-11/12 md:w-4/5 h-3/5 md:h-full mx-auto lg:w-3/4 grid justify-items-center content-center gap-6 text-center dark:text-yellow md:gap-10">
      <h1 className="text-3xl font-bold whitespace-nowrap md:text-6xl">
        Create and Download
        <br />
        Memes with MemeGen
      </h1>
      <p className="md:w-4/5 text-sm lg:text-lg">
        Make hilarious and shareable memes in minutes with our simple-to-use
        meme generator. Choose from a variety of meme templates, add captions,
        and download or share your memes instantly. start creating your memes
        today!
      </p>
      <button
        className="px-8 py-4 bg-black border border-2 border-black font-bold text-white
      rounded-2xl hover:shadow-dark transition-shadow duration-500 dark:text-black dark:bg-white dark:hover:shadow-light"
      >
        <Link href="/meme">Get Started</Link>
      </button>
    </div>
  )
}
