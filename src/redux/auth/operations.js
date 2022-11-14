import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk(
    "auth/register",
    async ({name, email, password}, {rejectWithValue}) => {
        try {
            const { data } = await axios.post("/users/signup", {name, email, password});
            console.log(data)
            token.set(data.token);
            return data;
        } catch (error) {
            Notify.failure('This user is already in the system 🤔. Please check and try again.');
            return rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async ({name, email, password}, {rejectWithValue}) => {
        try {
            const {data} = await axios.post('/users/login', {name, email, password});
            token.set(data.token);
            return data;
        } catch (error) {
            Notify.failure('Incorrect Login or Password 😔. Please check and try again.');
            return rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, {rejectWithValue}) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, {getState, rejectWithValue}) => {
        const state = getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return rejectWithValue('Unable to fetch user');
        }

        token.set(persistedToken);
        try {
            const {data} = await axios.get('/users/current');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);