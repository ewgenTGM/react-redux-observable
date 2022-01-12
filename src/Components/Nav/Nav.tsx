import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../Router/Router';

export const Nav: React.VFC = () => {
  return (
    <ul className={'navbar'}>
      <li>
        <NavLink to={PATH.TODOS}>Todos</NavLink>
      </li>
      <li>
        <NavLink to={PATH.REGISTER_FORM}>Register-form</NavLink>
      </li>
      <li>
        <NavLink to={PATH.YUP_FORM}>Yup-form</NavLink>
      </li>
    </ul>
  );
};