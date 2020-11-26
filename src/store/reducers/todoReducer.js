import * as ActionTypes from '../actions/actionTypes'

const initState = {
    todoList: null,
    maxId: 0,
    userId: 1,
}

const todoReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.ADD_TODO: {
            let id = state.maxId+1;
            let newItem = {
                id: id,
                user: state.userId,
                title: action.payload,
                completed: false,
            }
            return {
                ...state,
                todoList: [...state.todoList, newItem],
                maxId: id
            }
        }
        case ActionTypes.REMOVE_TODO: {
            return {
                ...state,
                todoList: state.todoList.filter( item => item.id !== action.payload)
            }
        }

        case ActionTypes.CLEAR_COMPLETED:{
            return {
                ...state,
                todoList: state.todoList.filter( item => !item.completed)
            }
        }

        case ActionTypes.TOGGLE_TODO: {
            let toggleItem = state.todoList.find(item => item.id === action.payload);
            toggleItem.completed = !toggleItem.completed
            return {
                ...state,
                todoList: [...state.todoList.filter( i => i.id !== action.payload), toggleItem]
            }
        }

        case ActionTypes.IMPORT_TODOS: {
            if(!action.payload || action.payload.length ===0 ) return initState;
            let maxId =  Math.max(...action.payload.map(o => o.id)) ;
            let userId = action.payload.map(item => item.userId)[0] ;
            return {
                ...state,
                todoList: action.payload,
                maxId: maxId,
                userId: userId
            }
        }
        default: return state;
            
    }
}

export default todoReducer;