import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: 0,
    name: "Ram",
    loggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedIn: (state) => {

            state.loggedIn = true
        },
        loggedOut: (state) => {
            state.loggedIn = false
        },

    },
})

export const { loggedIn, loggedOut } = userSlice.actions

export default userSlice.reducer