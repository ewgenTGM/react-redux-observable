import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../Router/Router';
import {UserPanel} from './UserPanel';

export const Nav: React.VFC = () => {
  return (
    <div className={'navbar'}>
      <ul>
        <li>
          <NavLink to={PATH.TODOS}>Todos</NavLink>
        </li>
        <li>
          <NavLink to={PATH.REGISTER_FORM}>Register-form</NavLink>
        </li>
        <li>
          <NavLink to={PATH.YUP_FORM}>Yup-form</NavLink>
        </li>
        <li>
          <NavLink to={PATH.GRAPH_QL}>GraphQL</NavLink>
        </li>
      </ul>
      <UserPanel />
    </div>
  );
};
