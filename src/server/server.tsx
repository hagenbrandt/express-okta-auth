import express, { Express, Request } from 'express'
import path from 'path'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
require('dotenv').config()
import recipeRoutes from './resources/recipe/recipe.router'
import userRoutes from './resources/user/user.router'
import manifestPath from './resources/services/manifest/manifestPath'
import { connect } from './utils/db'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { matchPath } from 'react-router-dom'
import routes, { Route } from '../shared/routes'
import { App } from '../client/components/app'
import { renderMarkupForSSR } from './resources/markupSSR/renderMarkupForSSR'
import oidcRouter from './resources/services/authentication/oidc'
import expressSession from './resources/services/session/expressSession'
import { createStore } from 'redux'
import configureStore from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/recipes', recipeRoutes)
app.use('/', userRoutes)

app.use(expressSession)
app.use(oidcRouter)

app.use('/', express.static(path.join(__dirname, 'static')))

app.get('*', (req, res) => {
  const currentRoute: Route | undefined = routes.find((route) =>
    matchPath(route.path, req.url)
  )
  const isRouteVerified =
    !!currentRoute ||
    req.url === '/' ||
    req.url === '/login' ||
    req.url === '/logout'
  // const { userContext } = req as any;
  // if (userContext) {
  //   console.log(userContext.userinfo); 
  // }
  // const user = userContext ? userContext.userinfo : null
  // const store = createStore({})
  const component = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>{React.createElement(App)}</StaticRouter>
    // <StaticRouter location={req.url}>{ReactDOMServer.renderToString(<App />)}</StaticRouter>
  )
  const fontSrc = 'https://fonts.googleapis.com/css?family=Kanit'
  const markup = renderMarkupForSSR({
    title: 'Recipe Collector',
    scriptSrc: manifestPath,
    component: component,
    fontSrc: fontSrc
  })

  if (isRouteVerified) {
    // res.render(markup, {name: 'Hagen'})
    return res.send(markup)
  }

  return res.status(404).send('Page not found').end()
})

export const start = () => {
  connect()
    .then(() =>
      app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
      )
    )
    .catch((error) => {
      throw error
    })
}
