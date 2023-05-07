import React from 'react'

type InputProps = {
  type: string
  placeholder?: string
  className?: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input({
  type,
  placeholder,
  className,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className={`p-2 rounded-xl outline-0 bg-zinc-900 text-white placeholder:text-grey-300 dark:bg-white dark:placeholder:text-grey-800 dark:text-black ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
