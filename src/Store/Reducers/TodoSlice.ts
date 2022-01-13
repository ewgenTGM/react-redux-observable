import {ITodo} from '../../Api/Api';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TodoStateType = {
  userId: number | null;
  todos: ITodo[];
  error: string;
  isLoading: boolean;
  fetchedUserId: number | null;
};

const initialState: TodoStateType = {
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
    setTodos(state, action: PayloadAction<{todos: ITodo[]}>) {
      state.todos = action.payload.todos;
      state.userId = state.fetchedUserId;
      state.fetchedUserId = 0;
      state.isLoading = false;
    },
    setError(state, action: PayloadAction<{error: string}>) {
      state.error = action.payload.error;
      state.isLoading = false;
    },
    cancelFetch(state) {
      state.isLoading = false;
      state.error = '';
    },
    fetchTodos(state, action: PayloadAction<{fetchedUserId: number}>) {
      state.isLoading = true;
      state.error = '';
      state.fetchedUserId = action.payload.fetchedUserId;
    },
  },
});

export default todoSlice.reducer;
export const todoActions = todoSlice.actions;
