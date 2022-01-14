import { ITodo } from '../../Api/Api';
import { PayloadAction } from '@reduxjs/toolkit';
export declare type TodoStateType = {
    userId: number | null;
    todos: ITodo[];
    error: string;
    isLoading: boolean;
    fetchedUserId: number | null;
};
export declare const todoSlice: import("@reduxjs/toolkit").Slice<TodoStateType, {
    setTodos(state: import("immer/dist/internal").WritableDraft<TodoStateType>, action: PayloadAction<{
        todos: ITodo[];
    }>): void;
    setError(state: import("immer/dist/internal").WritableDraft<TodoStateType>, action: PayloadAction<{
        error: string;
    }>): void;
    cancelFetch(state: import("immer/dist/internal").WritableDraft<TodoStateType>): void;
    fetchTodos(state: import("immer/dist/internal").WritableDraft<TodoStateType>, action: PayloadAction<{
        fetchedUserId: number;
    }>): void;
}, "todo">;
declare const _default: import("redux").Reducer<TodoStateType, import("redux").AnyAction>;
export default _default;
export declare const todoActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setTodos(state: import("immer/dist/internal").WritableDraft<TodoStateType>, action: PayloadAction<{
        todos: ITodo[];
    }>): void;
    setError(state: import("immer/dist/internal").WritableDraft<TodoStateType>, action: PayloadAction<{
        error: string;
    }>): void;
    cancelFetch(state: import("immer/dist/internal").WritableDraft<TodoStateType>): void;
    fetchTodos(state: import("immer/dist/internal").WritableDraft<TodoStateType>, action: PayloadAction<{
        fetchedUserId: number;
    }>): void;
}>;
