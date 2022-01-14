import {Epic} from 'redux-observable';
import {catchError, delay, filter, map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {Action, isOfType} from 'typesafe-actions';
import {todoApi} from '../../Api/Api';
import {todoActions} from '../Reducers/TodoSlice';
import {RootState} from '../Store';

export const fetchUserTodos: Epic<Action, Action, RootState> = action$ =>
  action$.pipe(
    filter(isOfType(todoActions.fetchTodos.type)),
    tap(console.log),
    mergeMap(action =>
      from(todoApi.getTodos(action.payload.fetchedUserId)).pipe(
        delay(1000),
        tap(console.log),
        map(response =>
          todoActions.setTodos({
            todos: response,
          })
        ),
        catchError(e => of(todoActions.setError(e))),
        takeUntil(action$.pipe(filter(isOfType(todoActions.cancelFetch.type))))
      )
    )
  );
