import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import gameSlice from "./gameSlice";
import movieSlice from "./movieSlice";
import userSlice from './userSlice'
export default configureStore({
    reducer: {
        authuser: authSlice,
        account: userSlice,
        game: gameSlice,
        movies: movieSlice
    }
})