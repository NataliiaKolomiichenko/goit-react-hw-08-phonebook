import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6363700e8a3337d9a2ddc216.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async ({ name, phone }, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", { name, phone });
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});