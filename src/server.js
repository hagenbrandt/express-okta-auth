const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const json = bodyParser.json
const urlencoded = bodyParser.urlencoded
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})