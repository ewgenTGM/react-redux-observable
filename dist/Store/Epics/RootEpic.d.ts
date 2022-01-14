export declare const rootEpic: import("redux-observable").Epic<import("typesafe-actions").Action<string>, import("typesafe-actions").Action<string>, import("redux").CombinedState<{
    todoReducer: import("../Reducers/TodoSlice").TodoStateType;
    appReducer: {
        user: string;
    };
}>, any>;
