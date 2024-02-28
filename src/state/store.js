import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';
import customerReducer from './slices/customerSlice';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    customer: customerReducer,
  },
});

export default store;
