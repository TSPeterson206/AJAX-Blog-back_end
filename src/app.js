const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/blogs', require('./routes/blogRoutes'))

app.use(function(req, res, next) {
    next( {status: 404, message: {error: "Not Found"}})
})

app.use(function(err, req, res, next){
    console.log(err)
    const error = {}

    error.message = err.message || "Internal Server Error"
    error.status = err.status || 500
    error.stack = err.stack
    res.status(error.status).send(error)
})

app.listen (port, function (){
    console.log(`Server started on port ${port}`)
})