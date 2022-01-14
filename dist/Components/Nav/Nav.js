import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../Router/Router';
import { UserPanel } from './UserPanel';
export const Nav = () => {
    return (React.createElement("div", { className: 'navbar' },
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(NavLink, { to: PATH.TODOS }, "Todos")),
            React.createElement("li", null,
                React.createElement(NavLink, { to: PATH.REGISTER_FORM }, "Register-form")),
            React.createElement("li", null,
                React.createElement(NavLink, { to: PATH.YUP_FORM }, "Yup-form")),
            React.createElement("li", null,
                React.createElement(NavLink, { to: PATH.GRAPH_QL }, "GraphQL"))),
        React.createElement(UserPanel, null)));
};
//# sourceMappingURL=Nav.js.map