import { ITodo } from '../../Api/Api';

export enum ACTION_TYPES {
  SET_TODOS = 'SET_TODOS',
  SET_ERROR = 'SET_ERROR',
  CANCEL_FETCH = 'CANCEL_FETCH',
  FETCH_USER_TODOS = 'FETCH_USER_TODOS'
}

export const fetchUserTodos = (fetchedUserId: number) => {
  return {
    type: ACTION_TYPES.FETCH_USER_TODOS as const,
    payload: {
      isLoading: true,
      error: '',
      fetchedUserId,
    },
  };
};

export const setError = (error: string) => {
  return {
    type: ACTION_TYPES.SET_ERROR as const,
    payload: { error, isLoading: false },
  };
};

export const cancelFetch = () => {
  return {
    type: ACTION_TYPES.CANCEL_FETCH as const,
    payload: {
      isLoading: false,
      error: '',
    },
  };
};

export const setTodos = (userId: number, todos: ITodo[]) => {
  return {
    type: ACTION_TYPES.SET_TODOS as const,
    payload: { userId, todos, isLoading: false },
  };
};

export type TodoActionType =
  ReturnType<typeof setTodos>
  | ReturnType<typeof setError>
  | ReturnType<typeof cancelFetch>
  | ReturnType<typeof fetchUserTodos>

type TodoStateType = {
  userId: number | null,
  todos: ITodo[],
  error: string,
  isLoading: boolean,
  fetchedUserId: number | null
}

const initialState: TodoStateType = {
  userId: null,
  todos: [],
  error: '',
  isLoading: false,
  fetchedUserId: null,
};

export const todoReducer = (state: TodoStateType = initialState, action: TodoActionType): TodoStateType => {
  switch (action.type) {
    case ACTION_TYPES.SET_ERROR:
    case ACTION_TYPES.SET_TODOS:
    case ACTION_TYPES.FETCH_USER_TODOS:
    case ACTION_TYPES.CANCEL_FETCH:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};