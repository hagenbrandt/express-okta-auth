import React from 'react'
import Tag from './Tag'

const TagList = ({ tags }: { tags: string[] }) => {
  if (!tags || !tags.length) {
    return <></>
  }

  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <Tag content={tag} />
      ))}
    </ul>
  )
}

export default TagList
