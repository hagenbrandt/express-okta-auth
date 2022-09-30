import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import itemRouter from './resources/item/item.router'
import { connect } from './utils/db'

const app = express()
const port = 3000

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/item', itemRouter)

export const start = () => {
  connect().then(async () => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
}