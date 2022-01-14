import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: '',
};
export const appSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload.user;
        },
    },
});
export default appSlice.reducer;
export const appActions = appSlice.actions;
//# sourceMappingURL=AppSlice.js.map