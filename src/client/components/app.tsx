import React from 'react'
import { getUser } from '../helper/helperFunctions'
import { AppRouter } from '../router/router'

export const App = () => {
  const isClient = typeof window !== 'undefined' && !!window.document
  const jwtToken = getJwtFromCookie()
  
  return (
    <>
      <h1 className="text-3xl font-bold">Recipe collector</h1>
      <button onClick={() => getUser(jwtToken ?? '')}>Get User Data</button>
      <AppRouter />
    </>
  )

  function getJwtFromCookie() {
    if (isClient) {
      return window.document.cookie.split('; ').find(item => item.includes('jwtToken'))?.split('=')[1]
    }
  }
}
