import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../Router/Router';
import {Button} from '@mui/material';
import {useAppDispatch} from '../../Hooks/useAppDispatch';
import {useAppSelector} from '../../Hooks/useAppSelector';
import {appActions} from '../../Store/Reducers/AppSlice';

export const Nav: React.VFC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.appReducer.user);
  return (
    <>
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
      {user && <h4>{user}</h4>}
      <Button onClick={() => dispatch(appActions.setUser({user: ''}))}>
        Logout
      </Button>
    </>
  );
};
