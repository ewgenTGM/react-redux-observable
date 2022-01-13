import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './Epics/RootEpic';
import {TodoActionType, todoReducer} from './Reducers/TodoReducer';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware<
  TodoActionType,
  TodoActionType,
  RootState
>();

const rootReducer = combineReducers({todo: todoReducer});
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

export type RootAction = TodoActionType;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

epicMiddleware.run(rootEpic);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;
