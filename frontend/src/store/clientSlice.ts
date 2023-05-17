import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Client, ClientState } from '../types';


const initialState: ClientState = {
  clients: [],
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClient: (state, action: PayloadAction<Client>) => {
      state.clients = [action.payload];
    },
    setClients: (state, action: PayloadAction<Client[]>) => {
      state.clients = action.payload;
    },
  },
});

export const { setClient, setClients } = clientSlice.actions;
export default clientSlice.reducer;