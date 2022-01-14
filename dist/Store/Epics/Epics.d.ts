import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';
import { RootState } from '../Store';
export declare const fetchUserTodos: Epic<Action, Action, RootState>;
