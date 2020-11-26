import React from 'react'
import {useDispatch} from 'react-redux'
import * as Actions from '../../store/actions/actions'
import {Col} from 'antd'
import { BorderOutlined , CheckOutlined , DeleteOutlined } from '@ant-design/icons';

const TodoItem = ({item}) => {
    const {id, title, completed} = item;
    const dispatch = useDispatch();

    const handleRemove = () => dispatch(Actions.removeTodo(id));
    const handleStatusChange = () => dispatch(Actions.toggleTodo(id));

    return (
        <>
            <Col flex="22px">
                {
                    (completed) ? 
                    <CheckOutlined className="todo-icon" onClick={handleStatusChange}/> 
                    : <BorderOutlined className="todo-icon" onClick={handleStatusChange}/> 
                }
            </Col>
            <Col flex="auto">
                <h3 className={(completed) ? "todo-item-completed" : ""}> {title} </h3> 
            </Col>
            <Col flex="22px">
                <DeleteOutlined className="todo-icon" onClick={handleRemove}/>
            </Col>
        </>
    )
}

export default TodoItem;