import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tdata: [],
  buttonData: {
    editButton: false,
    deleteButton: false,
    createButton: false,
    serviceButton: true,
    bookingButton: false,
  },
};

export const fetchServices = createAsyncThunk(
  'service/fetchServices', // Change the action type to 'employee/fetchServices'
  async (url) => {
    try {
      const resp = await axios.get(url);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      // Check if the error status is 404 and return an empty array
      if (error.response && error.response.status === 404) {
        return [];
      }
      // Re-throw the error if it's not a 404
      throw error;
    }
  }
);

const serviceSlice = createSlice({
  name: 'service', // Change the slice name to 'service'
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      // Change to fetchServices
      state.tdata = action.payload;
    });
  },
});

export default serviceSlice.reducer;
