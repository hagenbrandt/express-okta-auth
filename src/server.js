import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
const router = express.Router()
const port = 3000

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

app.use('/api', router)

app.get('/data', (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}