import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import yy from '../../public/images/yy.svg'
import yydark from '../../public/images/yydark.svg'

export default function DarkToggleButton() {
  const [rotationAngle, setRotationAngle] = useState<number>(0)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleClick = () => {
    setRotationAngle((prevRotationAngle) => prevRotationAngle + 180)
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="self-center cursor-pointer">
      <Image
        className={`w-8 h-8 transition duration-500 ease-in-out transform rotate-${rotationAngle}`}
        src={isDarkMode ? yydark : yy}
        alt="toggle icon for dark and light mode"
        style={{ transform: `rotate(${rotationAngle}deg)` }}
        onClick={handleClick}
      />
    </div>
  )
}
