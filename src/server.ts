// import express from 'express'
import path from 'path'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
// import cors from 'cors'
// import itemRouter from './resources/item/item.router'
// import { connect } from './utils/db'

// const app = express()
// const port = 3000

// app.use('/api/item', itemRouter)

// export const start = () => {
//   connect().then(async () => {
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`)
//     })
//   })
// }

import express, { Express } from "express"
import cors from "cors"
require('dotenv').config()
import recipeRoutes from './resources/recipe/recipe.router'
import { connect } from "./utils/db"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/recipes', recipeRoutes)

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

connect()
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`, process.env.DATABASE_URL)
      
    )
  )
  .catch(error => {
    throw error
  })
