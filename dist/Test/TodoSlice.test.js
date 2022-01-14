import reducer, { todoActions } from '../Store/Reducers/TodoSlice';
const initialState = {
    userId: null,
    todos: [],
    error: '',
    isLoading: false,
    fetchedUserId: null,
};
test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
});
test('added single todo should be in todos array', () => {
    const newState = reducer(initialState, todoActions.setTodos({ todos: [{ id: 1, title: 'title', completed: false }] }));
    expect(newState.todos.length).toBe(1);
});
test('added array todos should be in todos array', () => {
    const todos = [
        { id: 1, title: 'title_1', completed: false },
        { id: 2, title: 'title_2', completed: true },
        { id: 3, title: 'title_4', completed: false },
    ];
    const newState = reducer(initialState, todoActions.setTodos({ todos }));
    expect(newState.todos.length).toBe(3);
    expect(newState.todos).toEqual(todos);
});
//# sourceMappingURL=TodoSlice.test.js.map