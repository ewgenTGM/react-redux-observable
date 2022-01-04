import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './Epics/RootEpic';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({});
export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(epicMiddleware)
));

epicMiddleware.run(rootEpic);