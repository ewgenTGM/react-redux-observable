import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';
const instance = axios.create({baseURL: URL});

export const todoApi = {
	getTodos(userId: number) {
		return instance.get<ITodo[]>(`users/${userId}/todos`);
	}
}

export interface ITodo {
	userId: number,
	id: number,
	title: string,
	completed: boolean
}