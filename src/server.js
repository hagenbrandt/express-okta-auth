import express from 'express'
import { json, urlencoded } from 'body-parser'

const app = express()
const port = 3000

app.use(json())
app.use(urlencoded({ extended: true }))

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