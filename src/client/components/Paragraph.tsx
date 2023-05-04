import React from 'react'

type ParagraphProps = {
  text: string
  className?: string
}

const Paragraph = ({ text, className }: ParagraphProps) => {
  if (!text.length) {
    return <></>
  }

  return <p className={className}>{text}</p>
}

export default Paragraph
