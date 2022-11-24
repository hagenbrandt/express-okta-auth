import React from 'react'
import { Recipe } from '../../server/types/recipe'
import { AppRouter } from '../router/router'

export type AppProps = {
  recipes?: Recipe[];
  userContext?: any;
}

export const App = ({ recipes, userContext }: AppProps) => {
  // if (window) {console.log(window);
  // }
  if (userContext) {
    console.log(userContext);
    
  }
  return (
    <>
      <h1 className="text-3xl font-bold">Recipe collector</h1>
      <AppRouter />
    </>
  )
}
