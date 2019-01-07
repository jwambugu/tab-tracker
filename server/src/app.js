const express = require('express')
const bodyParser = require('body-parser')
const cors = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const port = 8081
 
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world',
    })
})
app.listen(port, console.log(`Server started on port ${port}`))
