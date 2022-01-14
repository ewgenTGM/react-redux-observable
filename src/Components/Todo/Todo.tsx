import React from 'react';
import {ITodo} from '../../Api/Api';

type PropsType = {
  todo: ITodo;
};

export const Todo: React.VFC<PropsType> = props => {
  const {title, id, completed} = props.todo;
  return (
    <div className="todo">
      <div className="todo-title">{title}</div>
      <div>
        id:
        {id}
      </div>
      <div>
        <span className={completed ? 'completed' : 'incompleted'}>{completed ? 'Complete' : 'Incomplete'}</span>
      </div>
    </div>
  );
};
