import {ITodo} from '../../Api/Api';
import {Epic, ofType} from 'redux-observable';

export enum ACTION_TYPES {
	SET_USER_ID = 'SET_USER_ID',
	SET_TODOS = 'SET_TODOS',
	SET_ERROR = 'SET_ERROR',
	SET_IS_LOADING = 'SET_IS_LOADING',
}

type actionType = {
	type: ACTION_TYPES,
	payload: any
}

export const setUserId = (userId: number): actionType => {
	return {
		type: ACTION_TYPES.SET_USER_ID as const,
		payload: {userId}
	};
};

export const setError = (error: string): actionType => {
	return {
		type: ACTION_TYPES.SET_ERROR as const,
		payload: {error}
	};
};

export const setIsLoading = (error: string): actionType => {
	return {
		type: ACTION_TYPES.SET_ERROR as const,
		payload: {error}
	};
};

export const setTodos = (isLoading: boolean): actionType => {
	return {
		type: ACTION_TYPES.SET_IS_LOADING as const,
		payload: {isLoading}
	};
};

const setTodosEpic: Epic<actionType, actionType, TodoStateType> = (action$, state$) =>
	action$.pipe(ofType(ACTION_TYPES.SET_TODOS));

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

export const todoReducer = (state: TodoStateType = initialState, action: actionType): TodoStateType => {
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