import React from 'react';
import {Button, Paper, TextField} from '@mui/material';
import {SubmitHandler, useForm} from 'react-hook-form';
import {EMAIL_PATTERN} from '../../Helpers/Constants';

interface IFormInput {
  email: string;
  pass: string;
  passConfirm: string;
}

export const RegisterForm: React.FC = () => {
  const {register, handleSubmit, formState, watch, trigger, reset} =
    useForm<IFormInput>();
  const password = watch('pass', '');
  const formSubmit: SubmitHandler<IFormInput> = data => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    alert(JSON.stringify(data, null, 2));
  };

  const emailOpts = {
    ...register('email', {
      required: 'Input email',
      pattern: {value: EMAIL_PATTERN, message: 'invalid email'},
    }),
  };

  const passwordOpts = {
    ...register('pass', {
      required: 'Input password',
      minLength: {value: 4, message: 'Min length = 4'},
    }),
  };
  const passwordConfirmOpts = {
    ...register('passConfirm', {
      validate: value => value === password || 'Passwords are not match',
    }),
  };

  return (
    <div className="register-form">
      <Paper>
        <h2>Register form</h2>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div>
            <TextField label="Email" size="small" {...emailOpts} />
            <p className="field-error-desc">
              {formState.errors.email && formState.errors.email.message}
            </p>
          </div>
          <div>
            <TextField
              type="password"
              label="Password"
              size="small"
              {...passwordOpts}
            />
            <p className="field-error-desc">
              {formState.errors.pass && formState.errors.pass.message}
            </p>
          </div>
          <div>
            <TextField
              type="password"
              label="Confirm password"
              size="small"
              {...passwordConfirmOpts}
            />
          </div>
          <p className="field-error-desc">
            {formState.errors.passConfirm &&
              formState.errors.passConfirm.message}
          </p>
          <Button size="small" variant="contained" type="submit">
            Submit
          </Button>
          <Button size="small" variant="contained" onClick={() => reset()}>
            Reset
          </Button>
        </form>
        <Button onClick={() => trigger()}>Trigger</Button>
      </Paper>
    </div>
  );
};
