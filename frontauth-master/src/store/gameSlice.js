import { createSlice } from "@reduxjs/toolkit";


const gamesSlice = createSlice({
    name: "gamescolllection",
    initialState: [{
        id: 1,
        title: "game1 ",
        goodbad: "good",
        rating: "3",
        bestCharacter: "Itachi",
        img: "https://static.wikia.nocookie.net/naruto/images/6/6f/Itachi_And_Sasuke.PNG/revision/latest?cb=20150220131951"

    },
    {
        id: 2,
        title: "game2 ",
        goodbad: "good",
        rating: "3",
        bestCharacter: "Itachi",
        img: "https://static.wikia.nocookie.net/naruto/images/6/6f/Itachi_And_Sasuke.PNG/revision/latest?cb=20150220131951"

    },
    {
        id: 3,
        title: "game3 ",
        goodbad: "good",
        rating: "3",
        bestCharacter: "Itachi",
        img: "https://static.wikia.nocookie.net/naruto/images/6/6f/Itachi_And_Sasuke.PNG/revision/latest?cb=20150220131951"

    }],
    reducers: {
        setGames: (state, action) => {
            return action.payload
        }
    }
})

export const { setGames } = gamesSlice.actions
export default gamesSlice.reducer


