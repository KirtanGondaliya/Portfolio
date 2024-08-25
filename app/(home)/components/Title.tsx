import React from 'react'

const Title = ({ text, className, }: { text: string; className?: string }) => {
  return (
    <div className={className}>
      <h1 className="text-3xl group-hover:text-green-500 transition-all duration-100 ease-in font-bold">
        {text}
      </h1>
      <div className="w-40 h-2 bg-green-500 rounded-full"></div>
      <div className="w-40 h-2 bg-indigo-500 translate-x-2 rounded-full"></div>
    </div>
  )
}

export default Title