import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: 0,
    username: "",
    role:"",
    loggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedIn: (state,action) => {
            state.loggedIn = true
            state.username = action.payload.username
            state.role = action.payload.role
        },
        loggedOut: (state) => {
            state.loggedIn = false
            state.username =""
            state.role=""
        },

    },
})

export const { loggedIn, loggedOut } = userSlice.actions

export default userSlice.reducer