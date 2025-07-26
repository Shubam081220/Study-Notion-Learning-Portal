import React from 'react'

export const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
      {" "}
  {text}
</span>
  )
}
