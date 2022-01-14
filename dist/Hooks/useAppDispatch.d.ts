export declare const useAppDispatch: () => import("redux").Dispatch<import("redux").AnyAction> & import("redux-thunk").ThunkDispatch<import("redux").CombinedState<{
    todoReducer: import("../Store/Reducers/TodoSlice").TodoStateType;
    appReducer: {
        user: string;
    };
}>, null, import("redux").AnyAction> & import("redux-thunk").ThunkDispatch<import("redux").CombinedState<{
    todoReducer: import("../Store/Reducers/TodoSlice").TodoStateType;
    appReducer: {
        user: string;
    };
}>, undefined, import("redux").AnyAction>;
