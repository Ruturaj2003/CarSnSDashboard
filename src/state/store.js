import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';
import customerReducer from './slices/customerSlice';
import stockPileReducer from './slices/stockPileSlice';
import serviceReducer from './slices/serviceSlice';
import carReducer from './slices/carSlice';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    customer: customerReducer,
    stockPile: stockPileReducer,
    service: serviceReducer,
    car: carReducer,
  },
});

export default store;
