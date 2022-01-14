import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TodoList } from '../Components/Todo/TodoList';
import { RegisterForm } from '../Components/RegisterForm/RegisterForm';
import { SimpleForm } from '../Components/SimpleForm/SimpleForm';
import { GraphQlTester } from '../Components/GraphQlTester/GraphQlTester';
export var PATH;
(function (PATH) {
    PATH["ROOT"] = "/";
    PATH["TODOS"] = "/todos";
    PATH["REGISTER_FORM"] = "/register-form";
    PATH["YUP_FORM"] = "/yup-form";
    PATH["GRAPH_QL"] = "/graphql";
})(PATH || (PATH = {}));
export const Router = () => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: PATH.ROOT, element: React.createElement(RegisterForm, null) }),
        React.createElement(Route, { path: PATH.TODOS, element: React.createElement(TodoList, null) }),
        React.createElement(Route, { path: PATH.REGISTER_FORM, element: React.createElement(RegisterForm, null) }),
        React.createElement(Route, { path: PATH.YUP_FORM, element: React.createElement(SimpleForm, null) }),
        React.createElement(Route, { path: PATH.GRAPH_QL, element: React.createElement(GraphQlTester, null) })));
};
//# sourceMappingURL=Router.js.map