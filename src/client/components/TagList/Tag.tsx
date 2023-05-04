import React from 'react'

const Tag = ({ content }: { content: string }) => {
  if (!content) {
    return <></>
  }

  return <li className="tag">{content}</li>
}

export default Tag
