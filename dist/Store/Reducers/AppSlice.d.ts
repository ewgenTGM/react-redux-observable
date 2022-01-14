import { PayloadAction } from '@reduxjs/toolkit';
declare type AppStateType = {
    user: string;
};
export declare const appSlice: import("@reduxjs/toolkit").Slice<AppStateType, {
    setUser(state: import("immer/dist/internal").WritableDraft<AppStateType>, action: PayloadAction<{
        user: string;
    }>): void;
}, "App">;
declare const _default: import("redux").Reducer<AppStateType, import("redux").AnyAction>;
export default _default;
export declare const appActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setUser(state: import("immer/dist/internal").WritableDraft<AppStateType>, action: PayloadAction<{
        user: string;
    }>): void;
}>;
