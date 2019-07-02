export const FETCH_TODO='FETCH_TODO';
export const ADD_TODO='ADD_TODO';
export const DELETE_TODO='DELETE_TODO';
export const CHANGE_TODO_STATUS='CHANGE_TODO_STATUS';

export const fetchTodos = () => dispatch => {
    dispatch({
        type: FETCH_TODO,
        payload:  { id: 5, title: 'My Task 5', completed: false },
    })
};

export const addTodo = title => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload:  title,
    })
}

export const deleteTodo = id => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload:  id,
    })
}

export const changeTodoStatus = id => dispatch => {
    dispatch({
        type: CHANGE_TODO_STATUS,
        payload:  id,
    })
}