import { Epic, ofType } from 'redux-observable';
import {
  catchError, delay, endWith, filter, map, mergeMap, take, tap,
} from 'rxjs/operators';
import { from, of, race } from 'rxjs';
import { isOfType } from 'typesafe-actions';
import { todoApi } from '../../Api/Api';
import {
  ACTION_TYPES, setError, setIsLoading, setTodos,
} from '../Reducers/TodoReducer';
import { store } from '../Store';

export const setUserIdEpic: Epic = (action$) => action$.pipe(
  filter(isOfType(ACTION_TYPES.SET_USER_ID)),
  tap(() => store.dispatch(setIsLoading(true))),
  tap(() => store.dispatch(setError(''))),
  mergeMap((action) => race(
    from(todoApi.getTodos(action.payload.userId))
      .pipe(
        delay(1000),
        map((response) => setTodos(response)),
        endWith(setIsLoading(false)),
        catchError((e) => of(setError(e), setIsLoading(false))),
      ),
    action$.pipe(
      ofType(ACTION_TYPES.CANCEL_FETCH),
      map(() => setIsLoading(false)),
      take(1),
    ),
  )),
);
