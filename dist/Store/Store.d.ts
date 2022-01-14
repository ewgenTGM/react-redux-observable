import { Action } from 'typesafe-actions';
declare const combinedReducer: import("redux").Reducer<import("redux").CombinedState<{
    todoReducer: import("./Reducers/TodoSlice").TodoStateType;
    appReducer: {
        user: string;
    };
}>, import("redux").AnyAction>;
export declare const setupStore: () => import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    todoReducer: import("./Reducers/TodoSlice").TodoStateType;
    appReducer: {
        user: string;
    };
}>, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<import("redux-observable").EpicMiddleware<Action<string>, Action<string>, import("redux").CombinedState<{
    todoReducer: import("./Reducers/TodoSlice").TodoStateType;
    appReducer: {
        user: string;
    };
}>, any> | import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    todoReducer: import("./Reducers/TodoSlice").TodoStateType;
    appReducer: {
        user: string;
    };
}>, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    todoReducer: import("./Reducers/TodoSlice").TodoStateType;
    appReducer: {
        user: string;
    };
}>, import("redux").AnyAction, undefined> | import("redux").Middleware<{}, import("redux").CombinedState<{
    todoReducer: import("./Reducers/TodoSlice").TodoStateType;
    appReducer: {
        user: string;
    };
}>, import("redux").Dispatch<import("redux").AnyAction>>>>;
export declare const configureEpic: () => void;
export declare type RootState = ReturnType<typeof combinedReducer>;
export declare type RootStore = ReturnType<typeof setupStore>;
export declare type AppDispatch = RootStore['dispatch'];
export {};
