import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import TodosFooter from './TodosFooter'
import {fetchTodos} from '../../utils/FetchTodoService'
import {getFilteredTodo, getActiveTodosTotal} from '../../store/selector'
import * as Actions from '../../store/actions/actions'
import { Row, Typography, List} from 'antd'

import './style.css'


const TodosView = () => {
    const todos = useSelector(state => state.todoReducer.todoList);
    const filteredTodos = useSelector(state => getFilteredTodo(state));
    const activeTodosTotal = useSelector(state => getActiveTodosTotal(state));
    const dispatch = useDispatch();

    useEffect( ()=> {
        if( !todos ){
            fetchTodos()
            .then( data => {
                dispatch(Actions.importTodos(data.slice(0, 10)));
            })
            .catch( err => {
                console.error(err);
            })
        }   
    }, []);

    return (
        <Row align="middle" justify="center">
            <div className="todo-card">
                <Typography.Title level={1} className="title">Todos</Typography.Title>
                <List
                    header={<AddTodo />}
                    footer={<TodosFooter activeTodosTotal={activeTodosTotal} />}
                    bordered
                    dataSource={filteredTodos || []}
                    locale={{ emptyText: <span/>}}
                    size="small"
                    renderItem={item => (
                        <List.Item>
                            <TodoItem item={item}/>
                        </List.Item>
                    )}
                />
                </div>
        </Row>
    )

}

export default TodosView