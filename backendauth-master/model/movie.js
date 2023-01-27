import { Schema, model } from 'mongoose'


const MoviesSchema = Schema({
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

export default model('MoviesSchema', MoviesSchema)
