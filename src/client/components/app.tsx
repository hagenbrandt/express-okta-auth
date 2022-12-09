import React from 'react'
import { AppRouter } from '../router/router'

export const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Recipe collector</h1>
      <AppRouter />
    </>
  )
}
