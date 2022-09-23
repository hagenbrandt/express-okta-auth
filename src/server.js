import express from 'express'
import { json, urlencoded } from 'body-parser'

const app = express()
const port = 3000

app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send({message: 'hello'})
})

app.post('/', (req, res) => {
  console.log(req.body);
    res.send({message: 'ok'})
})

export const start = () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}