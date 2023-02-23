import React from 'react'

type ParagraphProps = {
  text: string
}

const Paragraph = ({ text }: ParagraphProps) => {
  if (!text.length) {
    return <></>
  }

  return <p>{text}</p>
}

export default Paragraph
