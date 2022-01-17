import React, {useState} from 'react';
import {Button, CircularProgress, TextField} from '@mui/material';
import {useAppSelector} from '../../Hooks/useAppSelector';
import {Todo} from './Todo';
import {useAppDispatch} from '../../Hooks/useAppDispatch';
import {todoActions} from '../../Store/Reducers/TodoSlice';
import {Navigate} from 'react-router-dom';
import {PATH} from '../../Router/Router';

export const TodoList: React.VFC = () => {
  const dispatch = useAppDispatch();
  const [currentUserId, setCurrentUserId] = useState<number>(1);
  const {todos, userId, error, isLoading} = useAppSelector(state => state.todoReducer);
  const user = useAppSelector(state => state.appReducer.user);

  const todoList =
    todos.length !== 0 ? (
      todos.map(todo => <Todo todo={todo} key={todo.id} />)
    ) : (
      <div>
        <span>There are no Todos</span>
      </div>
    );

  const spinner = (
    <div className="spinner-with-cancellation" data-testid={'spinner'}>
      <CircularProgress />
      <Button variant="outlined" onClick={() => dispatch(todoActions.cancelFetch())}>
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
      {error && (
        <pre>
          <code>{JSON.stringify(error, null, 2)}</code>
        </pre>
      )}
      <TextField
        variant="outlined"
        size="small"
        value={currentUserId}
        disabled={isLoading}
        onChange={e => setCurrentUserId(+e.currentTarget.value)}
      />
      <Button variant="outlined" disabled={isLoading} onClick={() => dispatch(todoActions.fetchTodos({fetchedUserId: currentUserId}))}>
        Find user's todos
      </Button>
    </div>
  );
  if (!user) {
    return <Navigate to={PATH.REGISTER_FORM} />;
  }
  return (
    <>
      {isLoading || userBar}
      <div className="todoList">{isLoading ? spinner : todoList}</div>
    </>
  );
};
