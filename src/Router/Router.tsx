import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {TodoList} from '../Components/Todo/TodoList';
import {RegisterForm} from '../Components/RegisterForm/RegisterForm';
import {SimpleForm} from '../Components/SimpleForm/SimpleForm';

export enum PATH {
  TODOS = '/todos',
  REGISTER_FORM = '/register-form',
  YUP_FORM = '/yup-form',
}

export const Router: React.VFC = () => {
  return (
    <Routes>
      <Route path={PATH.TODOS} element={<TodoList />} />
      <Route path={PATH.REGISTER_FORM} element={<RegisterForm />} />
      <Route path={PATH.YUP_FORM} element={<SimpleForm />} />
    </Routes>
  );
};
