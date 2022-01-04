import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './Epics/RootEpic';
import {todoReducer} from './Reducers/TodoReducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({todo: todoReducer});
export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(epicMiddleware)
));

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;