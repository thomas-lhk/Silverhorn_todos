import { createSelector } from 'reselect'
import {TODO_FILTERS} from '../constants'

export const todoListSelector = state => state.todoReducer.todoList ;
export const filterSelector = state => (state.filterReducer && state.filterReducer.filter ) ? state.filterReducer.filter : "ALL";

export const getFilteredTodo = createSelector(
    todoListSelector,
    filterSelector,
    (todoListSelector, filterSelector) => {
    switch(filterSelector){
        case TODO_FILTERS.ACTIVE: return todoListSelector.filter(item => !item.completed);
        case TODO_FILTERS.COMPLETED:return todoListSelector.filter(item => item.completed);
        case TODO_FILTERS.ALL:
        default: return todoListSelector;
    }
})

export const getActiveTodosTotal = createSelector(
    todoListSelector,
    (todoListSelector) => (todoListSelector) ? todoListSelector.filter(item => !item.completed).length : 0
)