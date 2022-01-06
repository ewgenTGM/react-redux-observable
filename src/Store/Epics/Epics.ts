import {Epic, ofType} from 'redux-observable';
import {mergeMap, switchMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {ITodo} from '../../Api/Api';
import {of} from 'rxjs';
import {ACTION_TYPES, setIsLoading, setTodos, setUserId} from '../Reducers/TodoReducer';

// export const setUserIdEpic: Epic = (action$) =>
// 	action$.pipe(ofType(ACTION_TYPES.SET_USER_ID),
// 		mergeMap((action) => ajax.getJSON<ITodo[]>(`https://jsonplaceholder.typicode.com/users/${action.payload.userId}/todos`).pipe(
// 				mergeMap((todos) => of(setTodos(todos), setIsLoading(false)))
// 			)
// 		)
// 	);

export const setUserIdEpic: Epic = (action$, store$) =>
	action$.pipe(ofType(ACTION_TYPES.SET_USER_ID),
		switchMap(action => {
			console.log('First section');
			of(setIsLoading(true));
			return of(action);
		}),
		switchMap((action) => ajax.getJSON<ITodo[]>(`https://jsonplaceholder.typicode.com/users/${action.payload.userId}/todos`).pipe(
				mergeMap((todos) => of(setTodos(todos), setIsLoading(false)))
			)
		)
	);