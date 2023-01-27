import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "authuser",
    initialState: [{
        id: 1,
        name: "all",
        email: "all@gmail.com",
        password: "teste123.25",
        role: "admin"
    }],
    reducers: {
        setContacts: (state, action) => {
            return action.payload
        }
    }
})

export const { setContacts } = authSlice.actions
export default authSlice.reducer