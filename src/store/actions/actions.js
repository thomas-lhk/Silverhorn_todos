import * as ActionTypes from './actionTypes'


export const addTodo = item => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: item 
    }
}

export const removeTodo = id => {
    return {
        type: ActionTypes.REMOVE_TODO,
        payload: id
    }
}

export const clearCompleted = () => {
    return {
        type: ActionTypes.CLEAR_COMPLETED,
        payload: ""
    }
}

export const toggleTodo = id => {
    return {
        type: ActionTypes.TOGGLE_TODO,
        payload: id
    }
}

export const setFilter = filter => {
    return {
        type: ActionTypes.SET_FILTER,
        payload: filter
    }
}

export const importTodos = list => {
    return {
        type: ActionTypes.IMPORT_TODOS,
        payload: list
    }
}