import React from 'react';
import '@testing-library/jest-dom';
import {Provider} from 'react-redux';
import {configureEpic, setupStore} from '../Store/Store';
import {render, RenderResult, screen, waitFor} from '@testing-library/react';
import {TodoList} from '../Components/Todo/TodoList';
import {appActions} from '../Store/Reducers/AppSlice';
import {todoActions} from '../Store/Reducers/TodoSlice';
import {setupServer} from 'msw/node';
import {rest} from 'msw';
import {ITodo} from '../Api/Api';

const store = setupStore();
configureEpic();
store.dispatch(appActions.setUser({user: 'user@user.com'}));

const renderTodoList = (): RenderResult => {
  return render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

test('Todo list should be empty on first render', () => {
  renderTodoList();
  expect(screen.getByText('There are no Todos')).toHaveTextContent('There are no Todos');
});

test('Should be get and renderer 2 todos', async () => {
  renderTodoList();
  const apiPath = 'https://jsonplaceholder.typicode.com/users/2/todos';
  const todos: ITodo[] = [
    {id: 0, title: 'todo01', completed: false},
    {id: 1, title: 'todo02', completed: true},
  ];
  const server = setupServer(
    rest.get(apiPath, (_req, res, context) => {
      console.log('Fake result');
      return res(context.json(todos));
    })
  );
  server.listen();
  store.dispatch(todoActions.fetchTodos({fetchedUserId: 2}));
  const spinner = screen.queryByTestId('spinner');
  console.log(new Date().getTime());
  await waitFor(() => spinner);
  console.log(new Date().getTime());
  server.close();
  expect(store.getState().todoReducer.todos.length).toBe(2);
});
