import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {TodoList} from '../Components/Todo/TodoList';
import {RegisterForm} from '../Components/RegisterForm/RegisterForm';
import {GraphQlTester} from '../Components/GraphQlTester/GraphQlTester';

export enum PATH {
  ROOT = '/',
  TODOS = '/todos',
  REGISTER_FORM = '/register-form',
  GRAPH_QL = '/graphql',
}

export const Router: React.VFC = () => {
  return (
    <Routes>
      <Route path={PATH.ROOT} element={<RegisterForm />} />
      <Route path={PATH.TODOS} element={<TodoList />} />
      <Route path={PATH.REGISTER_FORM} element={<RegisterForm />} />
      <Route path={PATH.GRAPH_QL} element={<GraphQlTester />} />
    </Routes>
  );
};
