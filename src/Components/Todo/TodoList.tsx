import React, {useState} from 'react';
import {setUserId, setUserIdThunk} from '../../Store/Reducers/TodoReducer';
import {useAppSelector} from '../../Hooks/useAppSelector';
import {Todo} from './Todo';
import {useDispatch} from 'react-redux';

type PropsType = {};

export const TodoList: React.VFC<PropsType> = props => {

	const dispatch = useDispatch();
	const [currentUserId, setCurrentUserId] = useState<number>(1);

	const {todos, userId, error, isLoading} = useAppSelector(state => state.todo);
	const todoList = todos?.map(todo => ( <Todo todo={todo} key={todo.id}/> ));

	return (
		<>
			<div>
				<h2>User id: {userId}</h2>
				{error && <h2>Error: {error}</h2>}
				<input type="number" value={currentUserId} onChange={(e) => setCurrentUserId(+e.currentTarget.value)}/>
				<button onClick={() => dispatch(setUserId(currentUserId))}> Set user id</button>
			</div>
			<div className="todoList">
				{isLoading ? <span>Loading.....</span> : todoList}
			</div>
		</>
	);
};