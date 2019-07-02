import { FETCH_TODO, ADD_TODO, DELETE_TODO, CHANGE_TODO_STATUS } from '../actions/todoActions';

const initialState = {
    items: [
        { id: 1, title: 'My Task 1', completed: false },
        { id: 2, title: 'My Task 2', completed: false },
        { id: 3, title: 'My Task 3', completed: false },
        { id: 4, title: 'My Task 4', completed: false },
    ],
    newTodo: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case ADD_TODO:
            let title = action.payload;
            const max_id = parseInt(state.items.map(todo => { return todo.id }).sort().pop()) + 1;
            return {
                ...state,
                items: [...state.items, { id: max_id, title: title, completed: false }]
            }
        case DELETE_TODO:
            return {
                ...state,
                items: [...state.items.filter(todo => todo.id !== action.payload)]
            }

        case CHANGE_TODO_STATUS:
            let items = [...state.items.map(todo => {
                if(todo.id === action.payload) {
                    todo = { ...todo, completed: !todo.completed}
                }
                return todo;
            })];
            return {
                ...state,
                items:items
            }


        default:
            return state;
    }
}