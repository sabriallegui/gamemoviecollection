const express = require('express')
require('dotenv').config()
const connectdb = require('./config/connectdb')
const cors = require('cors')
const userRoutes = require('./routes/user')
const movieRouter = require('./routes/movie')
const gameRouter = require('./routes/gaming')

const app = express()

const port = process.env.PORT || 5004


app.use(express.json())
app.use(cors())

connectdb()


//route el auth 
app.use('/auth', userRoutes)
app.use('/movie', movieRouter)
app.use('/game', gameRouter)


app.listen(port, err => {
    err ? console.log(err) : console.log(`you are connected to the port: ${port}`)
})