import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';
const instance = axios.create({ baseURL: URL });

export interface ITodo {
  id: number,
  title: string,
  completed: boolean
}

export interface IPost {
  id: number,
  title: string,
  body: string
}

export interface IComment {
  id: number,
  email: string,
  body: string
}

export const todoApi = {
  getTodos(userId: number) {
    return instance.get<ITodo[]>(`users/${userId}/todos`).then((res) => res.data);
  },
};
