import React, { useState } from 'react'
import { Form } from './Form'
import { List } from './List/List'

export const App = () => {
  const [data, setData] = useState({
    title: 'Very new title',
    ingredients: {
      oneCup: 'something',
    },
    description: ['a description text'],
  })

  return (
    <>
      <h1 className='text-3xl font-bold'>Recipe collector</h1>
      <Form />
      <List />
      {/* <button onClick={postDataToDB}>Set data to database</button> */}
    </>
  )
}
