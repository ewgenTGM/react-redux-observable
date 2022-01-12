import React, { useState } from 'react';
import { Button, CircularProgress, TextField } from '@mui/material';
import { cancelFetch, setUserId } from '../../Store/Reducers/TodoReducer';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { Todo } from './Todo';
import { useAppDispatch } from '../../Hooks/useAppDispatch';

type PropsType = {};

// eslint-disable-next-line react/function-component-definition
export const TodoList: React.VFC<PropsType> = () => {
  const dispatch = useAppDispatch();
  const [currentUserId, setCurrentUserId] = useState<number>(1);

  const {
    todos, userId, error, isLoading,
  } = useAppSelector((state) => state.todo);

  const todoList = todos.length !== 0
    ? todos.map((todo) => <Todo todo={todo} key={todo.id} />)
    : (
      <div>
        <span>There are no Todos</span>
      </div>
    );

  const spinner = (
    <div className="spinner-with-cancellation">
      <CircularProgress />
      <Button
        variant="outlined"
        onClick={() => dispatch(cancelFetch())}
      >
        Cancel
      </Button>
    </div>
  );

  const userBar = (
    <div className="user-bar">
      <h2>
        User id:
        {userId || 'No user'}
      </h2>
      {error && <pre><code>{JSON.stringify(error, null, 2)}</code></pre>}
      <TextField
        variant="outlined"
        size="small"
        value={currentUserId}
        disabled={isLoading}
        onChange={(e) => setCurrentUserId(+e.currentTarget.value)}
      />
      <Button
        variant="outlined"
        disabled={isLoading}
        onClick={() => dispatch(setUserId(currentUserId))}
      >
        Set user id
      </Button>
    </div>
  );

  return (
    <>
      {isLoading || userBar}
      <div className="todoList">
        {isLoading ? spinner : todoList}
      </div>
    </>
  );
};
