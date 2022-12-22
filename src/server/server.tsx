import express, { Express } from 'express'
import path from 'path'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import recipeRoutes from './resources/recipe/recipe.router'
import authRoutes from './resources/services/authentication/auth.router'
import userRouter from './resources/user/user.router'
import manifestPath from './resources/services/manifest/manifestPath'
import { connect } from './utils/db'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { matchPath } from 'react-router-dom'
import routes, { Route } from '../shared/routes'
import { App } from '../client/components/app'
import { renderMarkupForSSR } from './resources/markupSSR/renderMarkupForSSR'
import expressSession from './resources/services/session/expressSession'
import responseStatus from './utils/responseStatus'
import config from './config'
import { protect } from './resources/services/authentication/auth.controller'
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')

const app: Express = express()

const PORT: string | number = config.ports.apiPort || 4000

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
)

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/', authRoutes)
app.use('/api/recipes', recipeRoutes)
app.use('/api/me', protect, userRouter)

app.use(expressSession)

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
  const component = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>{React.createElement(App)}</StaticRouter>
  )
  const fontSrc = 'https://fonts.googleapis.com/css?family=Kanit'
  const markup = renderMarkupForSSR({
    title: 'Recipe Collector',
    scriptSrc: manifestPath,
    component: component,
    fontSrc: fontSrc,
  })

  if (isRouteVerified) {
    return res.send(markup)
  }

  return res.status(responseStatus.notFound).send('Page not found').end()
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
