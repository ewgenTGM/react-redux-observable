import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type AppStateType = {
  user: string;
};

const initialState: AppStateType = {
  user: '',
};

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{user: string}>) {
      state.user = action.payload.user;
    },
  },
});

export default appSlice.reducer;
export const appActions = appSlice.actions;
