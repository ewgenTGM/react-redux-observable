import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import todoReducer from './Reducers/TodoSlice';
import appReducer from './Reducers/AppSlice';
import { rootEpic } from './Epics/RootEpic';
const epicMiddleware = createEpicMiddleware();
const combinedReducer = combineReducers({
    todoReducer,
    appReducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: combinedReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            thunk: true,
        }).concat(epicMiddleware),
    });
};
export const configureEpic = () => epicMiddleware.run(rootEpic);
//# sourceMappingURL=Store.js.map