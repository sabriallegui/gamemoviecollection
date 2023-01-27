const mongoose = require('mongoose')

//creation of the schemma 

const GamesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    goodbad: String,
    rating: Number,
    bestCharacter: String,
    img: String



})

module.exports = mongoose.model('Games', GamesSchema)
