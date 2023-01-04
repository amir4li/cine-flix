import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    watchlist: []
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setWatchlist: (state, action)=> {
            state.posts = action.payload.watchlist;
        }
    }
});

export const { setWatchlist } = movieSlice.actions;
export default movieSlice.reducer;

