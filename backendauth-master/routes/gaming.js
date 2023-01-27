const express = require('express')

const gameRouter = express.Router()
const { deletgame, GetById, Updategame, Addgame, GetGame } = require('../controlllers/gaming')

//get route 

gameRouter.get('/', GetGame)

//delet routes 

gameRouter.delete('/:id', deletgame)


//post route 

gameRouter.post('/', Addgame)

//put route 


gameRouter.put('/:id', Updategame)


//and naw it's the get by id 

gameRouter.get('/:id', GetById)
module.exports = gameRouter