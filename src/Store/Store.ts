import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './Epics/RootEpic';
import {TodoActionType, todoReducer} from './Reducers/TodoReducer';
import thunk from 'redux-thunk';
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware<TodoActionType, TodoActionType>();

const rootReducer = combineReducers({todo: todoReducer});
export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(epicMiddleware)
));

export type RootAction = TodoActionType;

epicMiddleware.run(rootEpic);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;