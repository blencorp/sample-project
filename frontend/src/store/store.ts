import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientSlice';

export default configureStore({
  reducer: {
    client: clientReducer,
  },
});