import {combineEpics} from 'redux-observable';
import {setUserIdEpic} from './Epics';

export const rootEpic = combineEpics(setUserIdEpic);