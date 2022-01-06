import React from 'react';
import {ITodo} from '../../Api/Api';

type PropsType = {
	todo: ITodo
};

export const Todo: React.VFC<PropsType> = props => {
	const {title, id, completed} = props.todo;
	return (
		<div className={'todo'}>
			<div>title: {title}</div>
			<div>id: {id}</div>
			<div>completed: {completed ? 'True' : 'False'}</div>
		</div>
	);
};