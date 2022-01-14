import React, { useState } from 'react';
import { Button, CircularProgress, TextField } from '@mui/material';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { Todo } from './Todo';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { todoActions } from '../../Store/Reducers/TodoSlice';
import { Navigate } from 'react-router-dom';
import { PATH } from '../../Router/Router';
export const TodoList = () => {
    const dispatch = useAppDispatch();
    const [currentUserId, setCurrentUserId] = useState(1);
    const { todos, userId, error, isLoading } = useAppSelector(state => state.todoReducer);
    const user = useAppSelector(state => state.appReducer.user);
    const todoList = todos.length !== 0 ? (todos.map(todo => React.createElement(Todo, { todo: todo, key: todo.id }))) : (React.createElement("div", null,
        React.createElement("span", null, "There are no Todos")));
    const spinner = (React.createElement("div", { className: "spinner-with-cancellation" },
        React.createElement(CircularProgress, null),
        React.createElement(Button, { variant: "outlined", onClick: () => dispatch(todoActions.cancelFetch()) }, "Cancel")));
    const userBar = (React.createElement("div", { className: "user-bar" },
        React.createElement("h2", null,
            "User id:",
            userId || 'No user'),
        error && (React.createElement("pre", null,
            React.createElement("code", null, JSON.stringify(error, null, 2)))),
        React.createElement(TextField, { variant: "outlined", size: "small", value: currentUserId, disabled: isLoading, onChange: e => setCurrentUserId(+e.currentTarget.value) }),
        React.createElement(Button, { variant: "outlined", disabled: isLoading, onClick: () => dispatch(todoActions.fetchTodos({ fetchedUserId: currentUserId })) }, "Find user's todos")));
    if (!user) {
        return React.createElement(Navigate, { to: PATH.REGISTER_FORM });
    }
    return (React.createElement(React.Fragment, null,
        isLoading || userBar,
        React.createElement("div", { className: "todoList" }, isLoading ? spinner : todoList)));
};
//# sourceMappingURL=TodoList.js.map