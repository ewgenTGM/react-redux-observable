import {ITodo, todoApi} from '../../Api/Api';
import {AppDispatch} from '../Store';

export enum ACTION_TYPES {
	SET_USER_ID = 'SET_USER_ID',
	SET_TODOS = 'SET_TODOS',
	SET_ERROR = 'SET_ERROR',
	SET_IS_LOADING = 'SET_IS_LOADING',
}

export const setUserId = (userId: number) => {
	return {
		type: ACTION_TYPES.SET_USER_ID as const,
		payload: {userId}
	};
};

export const setError = (error: string) => {
	return {
		type: ACTION_TYPES.SET_ERROR as const,
		payload: {error}
	};
};

export const setIsLoading = (isLoading: boolean) => {
	return {
		type: ACTION_TYPES.SET_IS_LOADING as const,
		payload: {isLoading}
	};
};

export const setTodos = (todos: ITodo[]) => {
	return {
		type: ACTION_TYPES.SET_TODOS as const,
		payload: {todos}
	};
};

export const setUserIdThunk = (userId: number) => async (dispatch: AppDispatch) => {
	dispatch(setIsLoading(true));
	dispatch(setError(''));
	try {
		const response = await todoApi.getTodos(userId);
		dispatch(setTodos(response.data));
		dispatch(setUserId(userId));
	} catch (e: any) {
		dispatch(setError(e.response ? e.response.data.error : e.message));
	} finally {
		dispatch(setIsLoading(false));
	}
};

export type TodoActionType =
	ReturnType<typeof setTodos>
	| ReturnType<typeof setUserId>
	| ReturnType<typeof setIsLoading>
	| ReturnType<typeof setError>;

type TodoStateType = {
	userId: number | null,
	todos: ITodo[],
	error: string,
	isLoading: boolean
}

const initialState: TodoStateType = {
	userId: null,
	todos: [],
	error: '',
	isLoading: false
};

export const todoReducer = (state: TodoStateType = initialState, action: TodoActionType): TodoStateType => {
	switch (action.type) {
		case ACTION_TYPES.SET_ERROR:
		case ACTION_TYPES.SET_IS_LOADING:
		case ACTION_TYPES.SET_TODOS:
		case ACTION_TYPES.SET_USER_ID:
			return {...state, ...action.payload};
		default:
			return state;
	}
};