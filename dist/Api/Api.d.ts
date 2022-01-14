export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}
export interface IPost {
    id: number;
    title: string;
    body: string;
}
export interface IComment {
    id: number;
    email: string;
    body: string;
}
export declare const todoApi: {
    getTodos(userId: number): Promise<ITodo[]>;
};
