// import express from 'express'
import express, { Express } from 'express'
import path from 'path'
import fs from 'fs'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
require('dotenv').config()
import recipeRoutes from './resources/recipe/recipe.router'
import { connect } from './utils/db'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { App } from '../client/components/app'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/recipes', recipeRoutes)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use('/', express.static(path.join(__dirname, 'static')))

const manifest = fs.readFileSync(
  path.join(__dirname, 'static/manifest.json'),
  'utf-8'
)
const assets = JSON.parse(manifest)

app.get('/', (req, res) => {
  const component = ReactDOMServer.renderToString(React.createElement(App))
  res.render('client', { assets, component })
})

export const start = () => {
  connect()
    .then(() =>
      app.listen(PORT, () =>
        console.log(
          `Server running on http://localhost:${PORT}`
        )
      )
    )
    .catch((error) => {
      throw error
    })
}
