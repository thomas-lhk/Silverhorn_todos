import React, {useState} from 'react'
import {Input} from 'antd'
import {useDispatch} from 'react-redux'
import * as Actions from '../../store/actions/actions'

const AddTodo = () => {
    const [state, setState] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        dispatch(Actions.addTodo(e.target.value));
        setState("")
    }

    const handleNewInput = (e) => {
        setState(e.target.value);
    }

    return (
        <Input 
            placeholder="What needs to be done?" 
            onPressEnter={handleAddTodo} 
            value={state} 
            onChange={handleNewInput}
        />
    )
}

export default AddTodo;
