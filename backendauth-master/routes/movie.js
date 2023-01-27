const { Route } = require('express');
const express = require('express')

const movieRouter = express.Router()
const { deletmovie, GetById, Updatemovie, Addmovie, Getmovie } = require('../controlllers/movie')

//get route 

movieRouter.get('/', Getmovie)

//delet routes 

movieRouter.delete('/:id', deletmovie)


//post route 

movieRouter.post('/', Addmovie)

//put route


movieRouter.put('/:id', Updatemovie)


//and naw it's the get by id 

movieRouter.get('/:id', GetById)
module.exports = movieRouter