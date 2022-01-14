import React from 'react';
import { Button, Paper, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { EMAIL_PATTERN } from '../../Helpers/Constants';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { appActions } from '../../Store/Reducers/AppSlice';
import { Navigate } from 'react-router-dom';
import { PATH } from '../../Router/Router';
export const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.appReducer.user);
    const { register, handleSubmit, formState, watch, trigger, reset } = useForm();
    const password = watch('pass', '');
    const formSubmit = data => {
        dispatch(appActions.setUser({ user: data.email }));
    };
    const emailOpts = {
        ...register('email', {
            required: 'Type email',
            pattern: { value: EMAIL_PATTERN, message: 'invalid email' },
        }),
    };
    const passwordOpts = {
        ...register('pass', {
            required: 'Type password',
            minLength: { value: 4, message: 'Min length = 4' },
        }),
    };
    const passwordConfirmOpts = {
        ...register('passConfirm', {
            validate: value => value === password || 'Passwords are not match',
        }),
    };
    if (user) {
        return React.createElement(Navigate, { to: PATH.TODOS });
    }
    return (React.createElement("div", { className: "register-form" },
        React.createElement(Paper, { elevation: 24, className: 'register-form__content' },
            React.createElement("form", { onSubmit: handleSubmit(formSubmit) },
                React.createElement("h2", null, "Register form"),
                React.createElement("div", null,
                    React.createElement(TextField, { label: "Email", fullWidth: true, size: "small", ...emailOpts }),
                    React.createElement("p", { className: "field-error-desc" }, formState.errors.email && formState.errors.email.message)),
                React.createElement("div", null,
                    React.createElement(TextField, { type: "password", fullWidth: true, label: "Password", size: "small", ...passwordOpts }),
                    React.createElement("p", { className: "field-error-desc" }, formState.errors.pass && formState.errors.pass.message)),
                React.createElement("div", null,
                    React.createElement(TextField, { type: "password", fullWidth: true, label: "Confirm password", size: "small", ...passwordConfirmOpts })),
                React.createElement("p", { className: "field-error-desc" }, formState.errors.passConfirm && formState.errors.passConfirm.message),
                React.createElement("div", { className: 'register-form__buttons' },
                    React.createElement(Button, { size: "small", variant: "contained", type: "submit", color: 'primary' }, "Submit"),
                    React.createElement(Button, { size: "small", variant: "contained", onClick: () => reset(), color: 'warning' }, "Reset"),
                    React.createElement(Button, { size: "small", variant: "contained", onClick: () => trigger(), color: 'info' }, "Trigger check"))))));
};
//# sourceMappingURL=RegisterForm.js.map