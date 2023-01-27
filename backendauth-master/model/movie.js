const mongoose = require('mongoose')


const MoviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    goodbad: String,
    rating: Number,
    bestCharacter: String,
    moviedescription: String,
    img: String


})

module.exports = mongoose.model('MoviesSchema', MoviesSchema)

