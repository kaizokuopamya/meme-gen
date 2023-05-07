import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import Input from './Utils/Input'
import { toPng } from 'html-to-image'
import download from 'downloadjs'
import Draggable from 'react-draggable'

interface Meme {
  randomImage: string
}

interface MemeData {
  memes: { url: string }[]
}

export default function Meme(): JSX.Element {
  const [meme, setMeme] = useState<Meme>({
    randomImage: 'http://i.imgflip.com/28j0te.jpg',
  })
  const [allMemes, setAllMemes] = useState<{ url: string }[]>([])
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [url, setUrl] = useState('')
  const [color, setColor] = useState('white')
  const colors = ['#FFFFFF', '#000000', '#7C7A7A', '#F7F06D', '#FF0303']

  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data: MemeData = await res.json()
      setAllMemes(data.memes)
    }
    getMemes()
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  function downloadImage(): void {
    if (nodeRef.current) {
      toPng(nodeRef.current)
        .then((dataURL: string) => {
          download(dataURL, 'meme.png')
        })
        .catch(() => console.log('error occurred'))
    } else {
      console.log('Meme image element not found')
    }
  }

  return (
    <main className="w-11/12 mx-auto md:flex justify-between border-t-2 border-black border-dotted dark:border-white">
      <section className="md:w-1/2">
        <div
          id="meme-img"
          className="relative flex justify-center py-8"
          ref={nodeRef}
        >
          <img
            src={url ? url : meme.randomImage}
            className="md:w-full"
            alt="meme-img"
          />
          <Draggable bounds="parent">
            <h2
              className={`absolute top-10 font-bold text-3xl uppercase hover:cursor-grabbing`}
              style={{
                textShadow: '0px 2px 2px rgba(41, 41, 41, 1)',
                color: `${color}`,
              }}
            >
              {topText}
            </h2>
          </Draggable>
          <Draggable bounds="parent">
            <h2
              className={`absolute bottom-10 font-bold text-3xl uppercase hover:cursor-grabbing`}
              style={{
                textShadow: '0px 2px 2px rgba(41, 41, 41, 1)',
                color: `${color}`,
              }}
            >
              {bottomText}
            </h2>
          </Draggable>
        </div>
      </section>
      <section className="md:w-1/2">
        <div className="p-4">
          <h2 className="my-4 text-xl font-bold dark:text-white">From Url</h2>
          <Input
            className="w-full"
            type="text"
            placeholder="Paste image link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Link
            className="my-2 ml-1 text-sm font-bold text-red-500 hover:underline"
            href="https://www.memeful.com"
            target="_blank"
          >
            Memeful.com
          </Link>
          <Link
            className="my-2 ml-6 text-sm font-bold text-red-500 hover:underline"
            href="https://indianmemetemplates.com"
            target="_blank"
          >
            indianmemetemplates.com
          </Link>
          <button
            className="px-16 py-2 bg-black border border-2 border-black font-bold text-white
      rounded-2xl duration-500 dark:text-black dark:bg-white"
            onClick={getMemeImage}
          >
            Get Random Meme Image
          </button>
          <h2 className="my-4 text-xl font-bold dark:text-white">Meme Text</h2>
          <div className="flex justify-between gap-2">
            <Input
              className="w-2/4"
              type="text"
              placeholder="top text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />
            <Input
              className="w-2/4"
              type="text"
              placeholder="bottom text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />
          </div>
          <div className="my-4 flex">
            <h2 className="text-xl mr-4 font-bold dark:text-white">
              Text color:
            </h2>
            {colors.length > 0 &&
              colors.map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 mr-4 border-2 border-black dark:border-white`}
                  style={{ backgroundColor: `${color}` }}
                  onClick={() => setColor(color)}
                ></div>
              ))}
          </div>
          <div className="my-4 text-center">
            <button
              className="px-16 py-2 bg-black border border-2 border-black font-bold text-white
      rounded-2xl duration-500 dark:text-black dark:bg-white"
              onClick={downloadImage}
            >
              Download &#x21e9;
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
