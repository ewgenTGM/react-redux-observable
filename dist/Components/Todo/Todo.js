import React from 'react';
export const Todo = props => {
    const { title, id, completed } = props.todo;
    return (React.createElement("div", { className: "todo" },
        React.createElement("div", { className: "todo-title" }, title),
        React.createElement("div", null,
            "id:",
            id),
        React.createElement("div", null,
            React.createElement("span", { className: completed ? 'completed' : 'incompleted' }, completed ? 'Complete' : 'Incomplete'))));
};
//# sourceMappingURL=Todo.js.map