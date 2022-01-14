import React from 'react';
import {useAppDispatch} from '../../Hooks/useAppDispatch';
import {useAppSelector} from '../../Hooks/useAppSelector';
import {Box, Button} from '@mui/material';
import {appActions} from '../../Store/Reducers/AppSlice';
import {Link} from 'react-router-dom';
import {PATH} from '../../Router/Router';

export const UserPanel: React.VFC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.appReducer.user);
  return (
    <Box sx={{display: 'flex', gap: '5px', alignItems: 'center'}}>
      {user ? (
        <>
          <span>{user}</span>
          <Button size={'small'} variant={'outlined'} onClick={() => dispatch(appActions.setUser({user: ''}))}>
            Logout
          </Button>
        </>
      ) : (
        <Button size={'small'} variant={'outlined'}>
          <Link to={PATH.REGISTER_FORM}>Login</Link>
        </Button>
      )}
    </Box>
  );
};
