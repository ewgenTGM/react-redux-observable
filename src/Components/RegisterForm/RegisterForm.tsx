import React from 'react';
import {Button, Paper, TextField} from '@mui/material';
import {SubmitHandler, useForm} from 'react-hook-form';
import {EMAIL_PATTERN} from '../../Helpers/Constants';
import {useAppDispatch} from '../../Hooks/useAppDispatch';
import {useAppSelector} from '../../Hooks/useAppSelector';
import {appActions} from '../../Store/Reducers/AppSlice';
import {Navigate} from 'react-router-dom';
import {PATH} from '../../Router/Router';

interface IFormInput {
  email: string;
  pass: string;
  passConfirm: string;
}

export const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.appReducer.user);
  const {register, handleSubmit, formState, watch, trigger, reset} = useForm<IFormInput>();

  const password = watch('pass', '');

  const formSubmit: SubmitHandler<IFormInput> = data => {
    dispatch(appActions.setUser({user: data.email}));
  };

  const emailOpts = {
    ...register('email', {
      required: 'Type email',
      pattern: {value: EMAIL_PATTERN, message: 'invalid email'},
    }),
  };

  const passwordOpts = {
    ...register('pass', {
      required: 'Type password',
      minLength: {value: 4, message: 'Min length = 4'},
    }),
  };
  const passwordConfirmOpts = {
    ...register('passConfirm', {
      validate: value => value === password || 'Passwords are not match',
    }),
  };

  if (user) {
    return <Navigate to={PATH.TODOS} />;
  }

  return (
    <div className="register-form">
      <Paper elevation={24} className={'register-form__content'}>
        <form onSubmit={handleSubmit(formSubmit)}>
          <h2>Register form</h2>
          <div>
            <TextField label="Email" fullWidth size="small" {...emailOpts} />
            <p className="field-error-desc">{formState.errors.email && formState.errors.email.message}</p>
          </div>
          <div>
            <TextField type="password" fullWidth label="Password" size="small" {...passwordOpts} />
            <p className="field-error-desc">{formState.errors.pass && formState.errors.pass.message}</p>
          </div>
          <div>
            <TextField type="password" fullWidth label="Confirm password" size="small" {...passwordConfirmOpts} />
          </div>
          <p className="field-error-desc">{formState.errors.passConfirm && formState.errors.passConfirm.message}</p>
          <div className={'register-form__buttons'}>
            <Button size="small" variant="contained" type="submit" color={'primary'}>
              Submit
            </Button>
            <Button size="small" variant="contained" onClick={() => reset()} color={'warning'}>
              Reset
            </Button>
            <Button size="small" variant="contained" onClick={() => trigger()} color={'info'}>
              Trigger check
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
