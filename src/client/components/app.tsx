import React from 'react'
import { Recipe } from '../../server/types/recipe'
import { AppRouter } from '../router/router'

export type AppProps = {
  recipes?: Recipe[]
}

export const App = ({ recipes }: AppProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Recipe collector</h1>
      <AppRouter />
    </>
  )
}
