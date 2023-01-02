import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    watchlist: []
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action)=> {
            state.user = action.payload.user;
            state.token = action.payload.token
        },
        setLogout: (state)=> {
            state.user = null;
            state.token = null;
        },

        setWatchlist: (state, action)=> {
            state.posts = action.payload.watchlist;
        }
    }
});

export const { setLogin, setLogout, setWatchlist } = authSlice.actions;
export default authSlice.reducer;

