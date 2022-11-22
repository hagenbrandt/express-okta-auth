import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from '../../shared/routes'

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            index={route.isIndex}
            path={route.path}
            element={route.component}
            key={`route-${index}`}
          />
        )
      })}
    </Routes>
  )
}
