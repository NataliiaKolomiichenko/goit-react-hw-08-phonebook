import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from './operations';

const authInitialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: null,
    error: null,
}

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    extraReducers: {
        [register.pending]: handlePending,
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.error = null;
        },
        [register.rejected]: handleRejected,
        [logIn.pending]: handlePending,
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.error = null;
        },
        [logIn.rejected]: handleRejected,
        [logOut.pending]: handlePending,
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error = null;
        },
        [logOut.rejected]: handleRejected,
        [fetchCurrentUser.pending](state) {
            state.isLoading = true;
            state.isFetchingCurrentUser = true;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.isFetchingCurrentUser = false;
            state.error = null;
        },
        [fetchCurrentUser.rejected](state, action) {
            state.isFetchingCurrentUser = false;
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const authReducer = authSlice.reducer;