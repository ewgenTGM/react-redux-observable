import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com';
const instance = axios.create({ baseURL: URL });
export const todoApi = {
    getTodos(userId) {
        return instance.get(`users/${userId}/todos`).then(res => res.data);
    },
};
//# sourceMappingURL=Api.js.map