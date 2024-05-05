import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    user: null

}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action); //helps debugging
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;