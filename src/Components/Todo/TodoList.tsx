import React, {useState} from 'react';
import {ITodo, todoApi} from '../../Api/Api';
import {Todo} from './Todo';

type PropsType = {};

export const TodoList: React.VFC<PropsType> = props => {
	const [todos, setTodos] = useState<ITodo[] | null>(null);
	const [userId, setUserId] = useState<number>(1);

	const fetchTodos = async () => {
		const response = await todoApi.getTodos(userId);
		setTodos(response.data);
	};

	const todoList = todos?.map(todo => ( <Todo todo={todo} key={todo.id}/> ));
	return (
		<>
			<div>
				<input type="number" value={userId} onChange={(e) => setUserId(+e.currentTarget.value)}/>
				<button onClick={fetchTodos}> Set user id</button>
			</div>
			<div className="todoList">
				{todoList || 'There aren\'t todos...'}
			</div>
		</>
	);
};