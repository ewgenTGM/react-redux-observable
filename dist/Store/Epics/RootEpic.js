import { combineEpics } from 'redux-observable';
import { fetchUserTodos } from './Epics';
export const rootEpic = combineEpics(fetchUserTodos);
//# sourceMappingURL=RootEpic.js.map