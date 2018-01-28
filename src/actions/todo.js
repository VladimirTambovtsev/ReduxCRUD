import axios from 'axios';

export const REQUEST_TODOS = "REQUEST_TODOS";
export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export function getTodos() {
    return dispatch => {
        dispatch({
            type: REQUEST_TODOS
        });

        return axios.get('api/todos')
            .then(responce => responce.data)
            .then(todos =>  dispatch({
                type: GET_TODOS,
                todos
            }));
    }
}

export function addTodo(title) {
    return axios.post('api/todos/', { title })
        .then(responce => responce.data)
        .then(todo => ({
            type: ADD_TODO,
            todo
        }));
}

export function deleteTodo(id) {
    return axios.delete(`api/todos/${id}`)
        .then(responce => ({
            type: DELETE_TODO,
            id
        }));
}

export function toggleTodo(id) {
    return axios.patch(`api/todos/${id}`)
        .then(responce => responce.data)
        .then(todo => ({
            type: TOGGLE_TODO,
            todo
        }));
}

export function editTodo(id, title) {
    return axios.put(`api/todos/${id}`, { title })
        .then(responce => responce.data)
        .then(todo => ({
            type: EDIT_TODO,
            todo
        }));
}