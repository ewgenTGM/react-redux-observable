import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    userId: null,
    todos: [],
    error: '',
    isLoading: false,
    fetchedUserId: null,
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodos(state, action) {
            state.todos = action.payload.todos;
            state.userId = state.fetchedUserId;
            state.fetchedUserId = 0;
            state.isLoading = false;
        },
        setError(state, action) {
            state.error = action.payload.error;
            state.isLoading = false;
        },
        cancelFetch(state) {
            state.isLoading = false;
            state.error = '';
        },
        fetchTodos(state, action) {
            state.isLoading = true;
            state.error = '';
            state.fetchedUserId = action.payload.fetchedUserId;
        },
    },
});
export default todoSlice.reducer;
export const todoActions = todoSlice.actions;
//# sourceMappingURL=TodoSlice.js.map