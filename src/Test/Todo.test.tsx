import React from 'react';
import '@testing-library/jest-dom';
import {ITodo} from '../Api/Api';
import {Provider} from 'react-redux';
import {configureEpic, setupStore} from '../Store/Store';
import {Todo} from '../Components/Todo/Todo';
import {render, RenderResult, screen} from '@testing-library/react';

const renderTodo = (todo: ITodo): RenderResult => {
  const store = setupStore();
  configureEpic();
  return render(
    <Provider store={store}>
      <Todo todo={todo} />
    </Provider>
  );
};

test('Todo should be rendered', () => {
  const todo: ITodo = {
    id: 0,
    title: 'Write test for component',
    completed: false,
  };
  renderTodo(todo);
  expect(screen.getByText('Write test for component')).toHaveTextContent('Write test for component');
});
