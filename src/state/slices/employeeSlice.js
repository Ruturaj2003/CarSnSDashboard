import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tdata: [],
};

export const fetchEmployees = createAsyncThunk(
  'employee/fetchEmployees',
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

export const deleteEmployees = createAsyncThunk(
  'employee/deleteEmplyoees',
  async (url, id) => {
    axios.delete(url + '/' + id);
    try {
    } catch (error) {
      console.log(error);
    }
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.tdata = action.payload;
      })
      .addCase(deleteEmployees.fulfilled, (state, action) => {
        state.value += 1;
        // Remove the item with the deletedId from tdata
        // state.tdata = state.tdata.filter((item) => item.id !== deletedId);
      });
  },
});

export default employeeSlice.reducer;
