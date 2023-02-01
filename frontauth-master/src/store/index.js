import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import gamesSlice from "./gameSlice";
import movieSlice from "./movieSlice";
import userSlice from './userSlice'
export default configureStore({
    reducer: {
        authuser: authSlice,
        account: userSlice,
        gamescolllection: gamesSlice,
        movies: movieSlice
    }
})