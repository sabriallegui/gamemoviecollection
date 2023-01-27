import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: [{
        id: 1,
        title: "movie1 ",
        image: "String",
        goodbad: "good",
        rating: "3",
        bestCharacter: "Itachi",
        moviedescription: "movie behy"
    },
    {
        id: 2,
        title: "movie1 ",
        image: "String",
        goodbad: "good",
        rating: "3",
        bestCharacter: "Itachi",
        moviedescription: "movie behy"
    },
    {
        id: 3,
        title: "movie1 ",
        image: "String",
        goodbad: "good",
        rating: "3",
        bestCharacter: "Itachi",
        moviedescription: "movie behy",
        img: "https://m.media-amazon.com/images/I/61j4pE8WtGL.jpg"
    }],
    reducers: {
        setmovies: (state, action) => {
            return action.payload
        }
    }
})

export const { setmovies } = movieSlice.actions
export default movieSlice.reducer


