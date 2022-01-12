import { Epic } from 'redux-observable';
import {
  catchError, delay, filter, map, mergeMap, takeUntil,
} from 'rxjs/operators';
import { from, of } from 'rxjs';
import { isOfType } from 'typesafe-actions';
import { todoApi } from '../../Api/Api';
import {
  ACTION_TYPES, setError, setTodos,
} from '../Reducers/TodoReducer';
import { RootAction, RootState } from '../Store';

export const fetchUserTodos: Epic<RootAction, RootAction, RootState> = (action$) => action$.pipe(
  filter(isOfType(ACTION_TYPES.FETCH_USER_TODOS)),
  mergeMap((action) =>
    from(todoApi.getTodos(action.payload.fetchedUserId))
      .pipe(
        delay(1000),
        map((response) => setTodos(action.payload.fetchedUserId, response)),
        catchError((e) => of(setError(e))),
        takeUntil(action$.pipe(
          filter(isOfType(ACTION_TYPES.CANCEL_FETCH)),
        )),
      ),
  ),
);