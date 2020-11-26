import * as ActionTypes from '../actions/actionTypes'
import {TODO_FILTERS} from '../../constants'

const initState = {
    filter: TODO_FILTERS.ALL
}

const filterReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.SET_FILTER: {
            return {
                ...state,
                filter: action.payload
            }
        }
        default: return state;      
    }
}

export default filterReducer;