import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async ({ name, number }, { rejectWithValue }) => {
    try {
        const response = await axios.post("/contacts", { name, number });
        Notify.success('Contact added 😀');
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        Notify.success('Contact removed 😉');
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
});

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      Notify.success('Contact changed 😉');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);