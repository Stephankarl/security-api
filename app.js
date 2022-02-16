const express = require('express')
const app = express()
const cors = require('cors')

const Data = require('./dataHandle')
const dataHandle = new Data()

app.use(cors())
app.use(express.json())

app.get('/api', (req, res) => {
    const data = dataHandle.get()
    res.send(data)
})

app.post('/api', (req, res) => {
    dataHandle.update(req.body)
    res.send(req.body)
})

app.listen(3001, () => console.log('Listening on 3001'))